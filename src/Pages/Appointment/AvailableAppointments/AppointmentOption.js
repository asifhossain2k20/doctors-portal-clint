import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const AppointmentOption = ({ appointmentOption , setTreatment}) => {
  const { name, slots,price } = appointmentOption;
 
  return (
    <div>
      <div className="card  shadow-xl text-center">
        <div className="card-body">
          <h2 className="text-2xl text-secondary font-bold">{name}</h2>
          <p>
            {slots.length > 0 ? slots.length : "0"}{" "}
            {slots.length > 1 ? "Slots" : "Slot"} Available
          </p>
          <p><small>${price}</small></p>
          <div className="card-actions justify-center">
            <label
            disabled={slots.length===0}
            onClick={()=>{setTreatment(appointmentOption)}}
              htmlFor="booking-modal"
              className="btn btn-primary text-white"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
