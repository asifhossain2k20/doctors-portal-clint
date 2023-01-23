import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointments = ({ selectedDate }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date=format(selectedDate,'PP')

  const {data:appointmentOptions=[],refetch,isLoading}=useQuery({
    queryKey:['appointmentOptions',date],
    queryFn: async ()=>{
      const response=await fetch(`https://doctors-portal-server-pink-one.vercel.app/appointmentOptions?date=${date}`)
      const data=await response.json()
      return data;
    }
  })
  if(isLoading){
    return <Loading></Loading>
  }
  // useEffect(() => {
  //   fetch("https://doctors-portal-server-pink-one.vercel.app/appointmentOptions")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAppointmentOptions(data);
  //     });
  // }, []);
  return (
    <div className="my-5">
      <p className="text-primary font-bold text-2xl text-center">
        Selected Date : {format(selectedDate, "PP")}
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {appointmentOptions.map((appointmentOption) => (
          <AppointmentOption
            appointmentOption={appointmentOption}
            key={appointmentOption._id}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          selectedDate={selectedDate}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
