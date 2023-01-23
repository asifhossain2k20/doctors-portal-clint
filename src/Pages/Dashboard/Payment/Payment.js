import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useNavigation } from "react-day-picker";
import { useLoaderData } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_Stripe_PK);
console.log("Stripe ", stripePromise);
const Payment = () => {
  // const navigation=useNavigation()
  const booking = useLoaderData();
  const { appointmentDate, name, slot, treatment, price } = booking;
  // if(navigation.state==='loading'){
  //   return <Loading></Loading>
  // }
  return (
    <div>
      <div>
        <h3 className="text-red-500 text-3xl font-bold">Payment : ${price}</h3>
        <h3>
          {name} is appointment on {appointmentDate} at {slot} for {treatment}
        </h3>
      </div>
      <div className="my-12 w-96">
        <Elements stripe={stripePromise}>
          <CheckoutForm  booking={booking}/>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
