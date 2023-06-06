import React, { createContext, useEffect, useState } from "react";

const Items = createContext(null);

const DishContext = (props) => {
  const [dishes, setDishes] = useState("");
  const [popularDishes, setPopularDishes] = useState("");

  const getData = async () => {
    let arr = [];
    let popularArr = [];
    for (let i = 0; i < 10; i++) {
      const res = await fetch(
        "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/"
      );

      const result = await res.json();
      // console.log(result);
      arr.push.apply(arr, result.dishes);

      popularArr.push.apply(popularArr, result.popularDishes);
    }

    setDishes(arr);
    setPopularDishes(popularArr);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Items.Provider value={{ dishes, popularDishes }}>
      {props.children}
    </Items.Provider>
  );
};

export default DishContext;
export { Items };
