import React from "react";

const Service = ({ service }) => {
    const {name,img,decription}=service
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-6 pt-6">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{decription}</p>
      </div>
    </div>
  );
};

export default Service;
