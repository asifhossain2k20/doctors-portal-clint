import React from "react";
import img from '../../../assets/images/treatment.png'
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
const DentalCare = () => {
  return (
    <div className="hero p-16">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={img}
          className="lg:w-2/5 p-10 h-98 rounded-lg"
          alt=''
        />
        <div>
          <h1 className="text-5xl font-bold">Exponential Dental Care <br /> Of Your Teeth</h1>
          <p className="py-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime praesentium ut, voluptatibus maiores illo sequi distinctio. Impedit culpa non, temporibus minus nesciunt deserunt, cupiditate eum pariatur atque, magnam ea quo veritatis doloremque perspiciatis tempore sed enim nobis corrupti placeat animi aut. Voluptas placeat obcaecati laudantium atque et. Officia voluptatum ipsa facilis vitae porro. Similique quisquam vel voluptates? Doloremque vero expedita velit minima delectus aliquid, voluptatibus doloribus modi fuga architecto at voluptatum odio? Distinctio sunt mollitia dignissimos esse accusantium inventore rerum voluptates dolores enim sit modi, delectus quia at, praesentium vel tempora neque reprehenderit minus, quisquam dolorem optio. Rem, soluta. Modi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
