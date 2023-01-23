import React from "react";
import bgImg from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
const Contactus = () => {
  return (
    <div className="" style={{ background: `url(${bgImg})` }}>
      <div className="text-center pt-5">
        <h4 className="font-bold text-2xl text-primary">Contact Us</h4>
        <h2 className="font-lg text-4xl text-white">Stay connected with us</h2>
      </div>
      <div className="flex justify-center items-center">
        <div className="py-10 w-1/2">
          <div>
            <input
              type="text"
              placeholder="Email Address"
              className="input input-bordered input-primary w-full"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Your Subject"
              className="input input-bordered input-primary w-full mt-5"
            />
          </div>
          <div>
            <textarea
              className="textarea textarea-bordered textarea-primary w-full  mt-5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="text-center mt-5">
            <PrimaryButton>Send</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
