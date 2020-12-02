import React, { useState, useEffect } from "react";
import Best_game from "../Best_game";
import Brand from "../Brand";
import Lastest_news from "../Latest_news";
import Latest_releases from "../Latest_releases";

import Pre_order from "../Pre_order";

const Home = () => {
  useEffect(() => {
    const API_URL = "http://localhost:1337/products?_limit=5";
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  const [products, setProduct] = useState([]);

  const [orderProduct, setOrderProduct] = useState([]);

  return (
    <div>
      <div className="bg-best-game bg-cover">
        <Best_game />
      </div>
      <div className="container mx-auto">
        <Latest_releases products={products} />
      </div>
      <Pre_order pre_products={products} />
      <Lastest_news />
    </div>
  );
};

export default Home;
