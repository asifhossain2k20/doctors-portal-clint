import React from "react";
import doctor from '../../../assets/images/doctor.png'
import bgImg from '../../../assets/images/appointment.png'
const MakeAppointment = () => {
  return (
    <div className="my-10"
        style={{background:`url(${bgImg})`}}
    >
      <div className="hero p-0">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className="-mt-48 hidden lg:block md:block  lg:w-1/2"
            alt=""
          />
          <div className="text-white">
            <h4 className="font-bold text-2xl text-primary">Appointment</h4>
            <h1 className="text-4xl font-lg">Make an appointment Today</h1>
            <p className="py-6">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
