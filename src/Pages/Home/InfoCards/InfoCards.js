import React from "react";
import InfoCard from "./InfoCard";
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
const InfoCards = () => {
  const infoData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Open  8.00 AM to 6.00 PM Everyday",
      bgClass: "bg-gradient-to-r from-primary to-secondary",
      img:clock
    },
    {
      id: 2,
      name: "Our Locations",
      description: "Dhaka , Rangpur, Sylhet",
      bgClass: "bg-accent",
      img:marker
    },
    {
      id: 3,
      name: "Contact Us",
      description: "doctors.portals@info.com",
      bgClass: "bg-gradient-to-r from-primary to-secondary",
      img:phone
    },
  ];
  return (
    <div className="my-5 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {infoData.map((card) => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
