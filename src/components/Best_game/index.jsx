import React, { useEffect, useState } from "react";
import Product_best from "../Product_best";
import Title from "../Title";

const Best_game = () => {
  useEffect(() => {
    let API_URL = `http://localhost:1337/products/?_sort=published_at:desc&_limit=2`;
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setBestProduct(data));
  }, []);

  const [bestProducts, setBestProduct] = useState([]);

  return (
    <div className="container mx-auto w-screen pt-20">
      <Title span={"BEST GAMES"} content={"OF THIS MONTH"} />
      <div className="grid grid-cols-2 gap-8 pb-5">
        {bestProducts.map((product, index) => {
          return <Product_best data={product} key={index} />;
        })}
        {/* <Product_best />
        <Product_best /> */}
      </div>
    </div>
  );
};

export default Best_game;
