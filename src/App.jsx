import { useState } from "react";
import Items from "./context/DishContext";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import OrderPage from "./components/OrderPage";

function App() {
  return (
    <>
      <Items>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/orders" element={<OrderPage />} />
          </Routes>
        </Router>
      </Items>
    </>
  );
}

export default App;
