import React from "react";

const Review = ({ review }) => {
  const { name, location, review: itemReview, img } = review;
  return (
    <div>
      <div className="card shadow-xl">
        <div className="card-body">
          <p>{itemReview}</p>
          <div className="card-actions items-center mt-2">
            <div className="avatar mr-5">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={img} alt='' />
              </div>
            </div>
            <div>
                <p className="font-bold">{name}</p>
                <p>{location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
