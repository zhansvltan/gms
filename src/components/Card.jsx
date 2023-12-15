import React from "react";

const Card = ({ imageSrc, name, description, logo }) => {
  return (
    <div
      style={{ height: "431px" }}
      className="rounded-[24px] overflow-hidden shadow-[0px_2px_10px_rgba(3,3,3,0.1)]"
    >
      <img className="w-full pb-[25px]" src={imageSrc} alt={name} />
      <div className="pl-[25px]">
        <h3 className="font-bold text-[24px] text-[#030303] pb-[20px]">
          {name}
        </h3>
        <p style={{ height: "144px" }} className="text-[#030303] text-[20px]">
          {description}
        </p>
        <p className="text-[#030303] text-[20px] font-[600] pb-[20px]">
          {logo}
        </p>
      </div>
    </div>
  );
};

export default Card;
