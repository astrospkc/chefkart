import React, { useContext } from "react";
import { IngredientsData } from "../context/IngredientsContext";
import Header from "./Header";
import { BsFillClockFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import image from "../images/ingredients.png";

const Ingredients = () => {
  const { ingredientsList } = useContext(IngredientsData);
  console.log(
    ingredientsList,
    ingredientsList.ingredients,
    ingredientsList.ingredients.vegetables
  );

  return (
    <>
      <Header />

      <div className="flex flex-col  shadow-sm shadow-red-300 md:mx-52 md:my-6 mx-2">
        <Link to="/">
          <BsFillArrowLeftCircleFill className="text-xl md:text-3xl m-2" />
        </Link>
        <div className="flex flex-row   ">
          {/* about mughlai */}
          <div className="md:mx-20 w-[50%]  top-0">
            <h1 className=" text-5xl font-bold mb-20">
              {ingredientsList.name}
            </h1>
            <p className="text-gray-500 text-2xl mb-10">
              Mughlai Masala is a style cookery developed in the Indian
              Subcontinent by the imperial kitchen of the Mughal Empire
            </p>
            <h1 className="flex flex-row items-center">
              <BsFillClockFill className="mr-4" />
              {ingredientsList.timeToPrepare}
            </h1>
          </div>
          {/* image */}
          <div className="w-[50%] mr-0 ">
            <img src={image} alt="" className="h-[50%]" />
          </div>
        </div>
        <div className="flex flex-col  md:mx-20  ">
          <div className="">
            <h1 className="text-2xl md:text-3xl font-semibold">Ingredients</h1>
            <h2>For 2 people</h2>
          </div>

          {/* vegetable */}
          <div className=" my-5">
            <h1 className="text-2xl md:text-3xl font-semibold">
              Vegetables(05)
            </h1>
            <div className="flex flex-row justify-between">
              {/* names */}

              <div className="flex flex-col">
                {ingredientsList.ingredients.vegetables &&
                  ingredientsList.ingredients.vegetables.map((e, i) => {
                    return (
                      <>
                        <li key={i} className="list-none">
                          {e.name}
                        </li>
                      </>
                    );
                  })}
              </div>

              {/* quantities */}
              <div>
                {ingredientsList.ingredients.vegetables &&
                  ingredientsList.ingredients.vegetables.map((e, i) => {
                    return (
                      <>
                        <li key={i} className="list-none">
                          {e.quantity}
                        </li>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>

          {/* spices */}
          <div className=" my-5 ">
            <h1 className="text-2xl md:text-3xl font-semibold">Spices</h1>
            <div className="flex flex-row justify-between">
              {/* names */}

              <div className="flex flex-col">
                {ingredientsList.ingredients.spices &&
                  ingredientsList.ingredients.spices.map((e, i) => {
                    return (
                      <>
                        <li key={i} className="list-none">
                          {e.name}
                        </li>
                      </>
                    );
                  })}
              </div>

              {/* quantities */}
              <div>
                {ingredientsList.ingredients.spices &&
                  ingredientsList.ingredients.spices.map((e, i) => {
                    return (
                      <>
                        <li key={i} className="list-none">
                          {e.quantity}
                        </li>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>

          {/* Appliances */}
          <div className=" my-5 ">
            <h1 className="text-2xl md:text-3xl font-semibold">Appliances</h1>
            <div className="flex flex-row justify-between">
              {/* names */}

              <div className="flex flex-col">
                {ingredientsList.ingredients.appliances &&
                  ingredientsList.ingredients.appliances.map((e, i) => {
                    return (
                      <>
                        <li key={i} className="list-none">
                          {e.name}
                        </li>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ingredients;
