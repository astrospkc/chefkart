import { createContext, useEffect, useState } from "react";

const IngredientsData = createContext(null);

const IngredientsContext = (props) => {
  const [ingredientsList, setIngredientsList] = useState([]);

  const getData = async () => {
    const res = await fetch(
      "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1"
    );
    const data = await res.json();
    console.log(data);
    setIngredientsList(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <IngredientsData.Provider value={{ ingredientsList }}>
      {props.children}
    </IngredientsData.Provider>
  );
};

export default IngredientsContext;
export { IngredientsData };
