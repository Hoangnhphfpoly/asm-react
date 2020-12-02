import React, { useContext } from "react";
import { CartContext } from "../../context/Cart";
import Product from "../Product";
import Title from "../Title";

const Latest_releases = ({ products }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="mb-6">
      <Title span={""} content={"Latest releases"} />
      <div className="grid grid-cols-5 gap-3">
        {products.map((product, index) => {
          return (
            <Product
              data={product}
              id={index + 1}
              contentButton={"Buy"}
              onHandleClick={() => addToCart(product)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Latest_releases;
