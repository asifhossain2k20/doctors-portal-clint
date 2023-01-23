import React from "react";
import icon from "../.../../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from "./Review";
const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Wilson Kahan",
      img: people1,
      location: "Calofonia",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 2,
      name: "Wilson Kahan",
      img: people2,
      location: "Calofonia",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 1,
      name: "Wilson Kahan",
      img: people3,
      location: "Calofonia",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <div className="my-10">
      <div className="flex justify-between">
        <div>
          <h4 className="font-bold text-2xl text-primary">Testimonial</h4>
          <h1 className="text-4xl font-lg">What Our Patients Says</h1>
        </div>
        <div>
          <img className="w-16 lg:w-32" src={icon} alt="" />
        </div>
      </div>
      <div className="mt-5 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
            reviews.map(review=><Review
                key={review._id}
                review={review}
            ></Review>)
        }
      </div>
    </div>
  );
};

export default Testimonials;
