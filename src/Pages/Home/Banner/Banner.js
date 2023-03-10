import React from "react";
import chair from "../../../assets/images/chair.png";
import bgImg from "../../../assets/images/bg.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
const Banner = () => {
  return (
    <div
      className="my-5 justify-center  bg-no-repeat bg-cover bg-center rounded-lg"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="lg:w-1/2 " alt="" />
          <div>
            <h1 className="text-5xl font-bold">Welcome To Doctors Portal</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
