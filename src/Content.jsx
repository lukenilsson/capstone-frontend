import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";

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
    <div>
      <ProductsIndex products={products} />
    </div>
  );
}
