import React from "react";

const PopularDishesCard = (props) => {
  const { name, image } = props;
  return (
    <div className="rounded-full mr-4">
      <img src={image} alt="" className="rounded-full h-20 w-20" />
      <h1>{name}</h1>
    </div>
  );
};

export default PopularDishesCard;
