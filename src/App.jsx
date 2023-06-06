import { useState } from "react";
import Items from "./context/DishContext";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import OrderPage from "./components/OrderPage";
import Ingredients from "./components/Ingredients";
import IngredientsData from "./context/IngredientsContext";

function App() {
  return (
    <>
      <IngredientsData>
        <Items>
          <Router>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/orders" element={<OrderPage />} />
              <Route path="/ingredients" element={<Ingredients />} />
            </Routes>
          </Router>
        </Items>
      </IngredientsData>
    </>
  );
}

export default App;
