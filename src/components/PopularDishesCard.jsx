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
        loading: "lazy",
      }}
      className=""
    >
      {/* <img src={image} alt="" className="rounded-full h-20 w-20" /> */}
      <div className="blurred h-[90px] w-[90px]">
        <h1 className=" text-center">{name}</h1>
      </div>
    </div>
  );
};

export default PopularDishesCard;
