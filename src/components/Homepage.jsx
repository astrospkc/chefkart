import React from "react";
import Header from "./Header";
import ItemsCard from "./ItemsCard";
import { useContext } from "react";
import { Items } from "../context/DishContext";
import _ from "lodash";
import PopularDishesCard from "./PopularDishesCard";

const Homepage = () => {
  const { dishes, popularDishes } = useContext(Items);
  return (
    <>
      <Header />
      {/* popular dishes */}
      <div className="flex flex-col  bg-black">
        <div className="text-white">Popular Dishes</div>
        <div className="flex flex-row ">
          {popularDishes &&
            popularDishes.map((e, i) => {
              const { name, image, id } = e;
              return (
                <>
                  <div key={i} className="">
                    <PopularDishesCard name={name} image={image} />
                  </div>
                </>
              );
            })}
        </div>
      </div>
      <div className="flex flex-col border-2 m-4">
        <div>Recommended Items</div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-5">
            {dishes &&
              dishes.map((e, i) => {
                const { name, rating, description, equipments, image, id } = e;
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
    </>
  );
};

export default Homepage;
