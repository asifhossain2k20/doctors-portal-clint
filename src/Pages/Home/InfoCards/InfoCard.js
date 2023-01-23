import React from "react";

const InfoCard = ({ card }) => {
  const { name, description, bgClass, img } = card;
  return (
    <div className={`card md:card-side shadow-xl ${bgClass} p-5 text-white`}>
      <figure>
        <img src={img} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
