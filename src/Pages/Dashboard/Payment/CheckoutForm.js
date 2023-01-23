import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { transparent } from "daisyui/src/colors";
import React, { useEffect } from "react";
import { useState } from "react";

const CheckoutForm = ({ booking }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [success, setSuccess] = useState("");
  const [tarnsaction, setTransaction] = useState("");
  const [processing, setProcessing] = useState(false);
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const { price, email, name ,_id} = booking;
  useEffect(() => {
    fetch("https://doctors-portal-server-pink-one.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setTransaction('')
    setProcessing(true)
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    
    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message);
      return;
    }
    if(paymentIntent.status==="succeeded"){
        setTransaction(paymentIntent.id)
        setSuccess('Payment Done Successfully')
        //backend Integration
        const payment={
            bookingId:_id,
            email,
            tarnsactionId:paymentIntent.id,
            price:price
        }
        fetch('https://doctors-portal-server-pink-one.vercel.app/payment',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(payment)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){

            }
        })
    }
    setProcessing(false)
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-sm my-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && (
        <p className="font-bold text-xl text-red-500">{cardError}</p>
      )}
      {
        success && <div>
            <p className="text-green-500">{success} at <span className="text-bold">{tarnsaction}</span></p>
        </div>
      }
    </>
  );
};

export default CheckoutForm;
