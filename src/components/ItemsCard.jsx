import React from "react";

const ItemsCard = (props) => {
  const { name, rating, description, equipments, image, id } = props;
  return (
    <>
      <div className="">
        <div className="flex flex-row-reverse md:flex-col my-3 ">
          {/* image div */}
          <div className="w-[40%] md:w-fit md:mr-3 ml-3">
            <img src={image} alt="" className="h-32 w-32 rounded-2xl" />
            {/* <div>
              <button>add</button>
            </div> */}
          </div>
          {/* names and all */}
          <div className="w-[60%] md:w-fit">
            {/* name rating */}
            <div>
              <h1>{name}</h1>
              <div>{rating}</div>
            </div>
            {/* equipment */}
            <div>{equipments}</div>
            {/* description */}
            <div>{description}</div>
          </div>
        </div>
      </div>
      {/* photo */}

      {/* name of the item */}
      {/* rating  */}
      {/* add button */}
      {/* plus and minus button */}
    </>
  );
};

export default ItemsCard;
