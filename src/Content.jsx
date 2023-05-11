import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { Signup } from "./Signup";

export function Content() {
  const [products, setProducts] = useState([]);

  const handleIndexProducts = () => {
    console.log("handleIndexProducts", 1);
    axios.get("http://localhost:3000/scraper.json").then((response) => {
      console.log(response.data, 2);
      setProducts(response.data.products);
    });
  };

  useEffect(handleIndexProducts, []);

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/scraper" element={<ProductsIndex products={products} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
