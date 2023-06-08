import React from "react";
import Header from "./Header";
import ItemsCard from "./ItemsCard";
import { useContext } from "react";
import { Items } from "../context/DishContext";

import PopularDishesCard from "./PopularDishesCard";
import Time from "./Time";

const Homepage = () => {
  const { dishes, popularDishes } = useContext(Items);

  // scroll event
  const handleScroll = (event) => {
    const container = event.target;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="relative">
        <div className="fixed top-0 w-[100%] shadow-sm shadow-red-300 bg-white z-20 ">
          <div className="">
            <Header />
          </div>
          <div className="absolute top-[20%] left-[15%]">
            <Time />
          </div>

          {/* popular dishes */}
          <div className="flex flex-col mx-3     ">
            <div className="text-xl md:text-2xl font-semibold">
              Popular Dishes
            </div>
            <div
              className="container flex justify-evenly items-center gap-4 mx-3 my-2  flex-nowrap overflow-x-scroll min-w-full  "
              onWheel={handleScroll}
            >
              {popularDishes &&
                popularDishes.map((e, i) => {
                  const { name, image, id } = e;
                  return (
                    <>
                      <div key={i} className="ml-1">
                        <PopularDishesCard name={name} image={image} />
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="flex flex-col  m-4 md:m-1 sm:mt-[90%] mt-[70%] md:mt-[20%]    ">
          <div className="text-xl font-semibold md:text-2xl">
            Recommended Items
          </div>
          <div>
            <div className="grid grid-cols-1 border-2 rounded-lg md:grid-cols-5 ">
              {dishes &&
                dishes.map((e, i) => {
                  const { name, rating, description, equipments, image, id } =
                    e;
                  return (
                    <>
                      <div key={i} className="">
                        <ItemsCard
                          name={name}
                          rating={rating}
                          description={description}
                          equipments={equipments}
                          image={image}
                        />
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
