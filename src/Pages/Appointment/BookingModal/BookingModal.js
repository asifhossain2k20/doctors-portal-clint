import { format } from "date-fns";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookingModal = ({ treatment, selectedDate,setTreatment,refetch}) => {
  const { name, slots,price } = treatment;
  const date = format(selectedDate, "PP");
  const{user}=useContext(AuthContext)

  const handleBooking=(e)=>{
    e.preventDefault()
    const form=e.target;
    const patientName=form.name.value;
    const slot=form.slot.value;
    const email=form.email.value;
    const phone=form.phone.value;
    const bookingData={
      appointmentDate:date,
      treatment:name,
      name:patientName,
      email,
      phone,
      slot,
      price
    }
    setTreatment(null)
    fetch('https://doctors-portal-server-pink-one.vercel.app/bookings',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(bookingData)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.acknowledged){
        setTreatment(null)
       toast.success('Appointent Get Successfully')
       refetch()
      }
      else{
        toast.error(data.message)
      }
      
    })
  }
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBooking} className="mt-5 grid grid-cols-1 gap-5">
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full "
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot,index) => (
                <option value={slot} key={index}>{slot}</option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Enter Your Name"
              defaultValue={user?.displayName}
              disabled
              className="input input-bordered w-full "
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Enter Your Email"
              className="input input-bordered w-full "
            />
            <input
              name="phone"
              type="text"
              placeholder="Enter Your phone Number"
              className="input input-bordered w-full "
            />
            <input
              type="submit"
              className="btn btn-accent input input-bordered w-full text-white"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
