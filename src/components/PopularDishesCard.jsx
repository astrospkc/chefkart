import React from "react";

const PopularDishesCard = (props) => {
  const { name, image } = props;

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        borderRadius: "100%",
        height: "90px",
        width: "90px",
        backdropFilter: blur(10),
      }}
    >
      {/* <img src={image} alt="" className="rounded-full h-20 w-20" /> */}
      <h1 className="blurred text-center">{name}</h1>
    </div>
  );
};

export default PopularDishesCard;
