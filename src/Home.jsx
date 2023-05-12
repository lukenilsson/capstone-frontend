import Scout_1 from "./images/MJ_Scout_1.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/scraper.json").then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  return (
    <div className="page-container">
      <div className="centered-container">
        <div className="centered-content">
          <h1>Welcome to Scout</h1>
          <div className="home-image">
            <img src={Scout_1} alt="My Image" />
          </div>
          <div className="scrape-tally">
            <p>Chewy is selling {products.length} products.</p>
            <div className="scrape-button">
              <Link to="/scraper" className="scrape-now-button">
                Scrape Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
