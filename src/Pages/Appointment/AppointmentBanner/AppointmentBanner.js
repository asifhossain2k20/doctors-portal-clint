import React, { useState } from "react";
import chair from "../../../assets/images/chair.png";
import bgImg from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
const AppointmentBanner = ({setSelected,selected}) => {
  ;
  return (
    <header
      className="bg-no-repeat bg-cover bg-center my-6"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="hero p-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            alt="Chair"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="mr-10">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
            ></DayPicker>
            <p>Selected Date : {format(selected, "PP")}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
