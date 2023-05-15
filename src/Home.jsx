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
    <div className="container-lg">
      <div className="d-flex align-items-center justify-content-center h-100">
        <div className="text-center">
          <h1>Welcome to Scout</h1>
          <div
            className="home-image"
            style={{ width: "50%", margin: "0 auto" }}
          >
            <img src={Scout_1} alt="My Image" className="img-fluid" />
          </div>
          <div className="d-flex justify-content-center mt-4">
            <div className="card" style={{ width: "50%" }}>
              <div className="card-body">
                <p className="card-text">
                  Chewy is selling {products.length} products.
                </p>
                <Link to="/scraper" className="btn btn-primary">
                  Scrape Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
