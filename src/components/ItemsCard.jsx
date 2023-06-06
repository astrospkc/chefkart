import React from "react";
import { Link } from "react-router-dom";

const ItemsCard = (props) => {
  const { name, rating, description, equipments, image, id } = props;
  return (
    <>
      <div className=" mr-4 hover:shadow-lg md:shadow-red-400 hover:  ">
        <div className="flex flex-row-reverse md:flex-col my-3 ">
          {/* image div */}
          <div className="w-[40%] md:w-fit ">
            <img
              src={image}
              alt=""
              className="h-32 w-32 md:h-fit md:w-fit md:p-3 rounded-2xl"
            />
            <div className="absolute top-[90%] left-[30%]">
              <button className="bg-yellow-400 px-4 rounded-xl border-2 border-white">
                add
              </button>
            </div>
          </div>
          {/* names and all */}
          <div className="w-[60%] md:w-fit flex flex-col md:p-3 ml-2  ">
            {/* name rating */}
            <div className="flex flex-row mb-4 ">
              <h1 className="mr-3 text-lg font-medium">{name}</h1>
              <div className="bg-green-600 px-3">{rating}</div>
            </div>
            <div>
              {/* equipment */}
              <div className="flex flex-row">
                <div className="text-xs mb-2 mr-2 flex flex-row gap-1">
                  {equipments &&
                    equipments.map((e, i) => {
                      return (
                        <>
                          <h1>{e}</h1>
                        </>
                      );
                    })}
                </div>
                <Link to="/ingredients">
                  <div className="text-xs mb-2 hover:cursor-pointer font-bold">
                    Ingredients
                  </div>
                </Link>
              </div>

              {/* description */}
              <div className="text-sm text-gray-500">{description}</div>
            </div>
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
