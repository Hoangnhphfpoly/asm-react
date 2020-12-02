import React, { useContext } from "react";
import { CartContext } from "../../context/Cart";
import Product from "../Product";
import Title from "../Title";

const Pre_order = ({ pre_products }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="container mx-auto pb-8">
      <Title span={""} content={"Pre-orders"} />
      <div className="grid grid-cols-5 gap-3">
        {pre_products.map((pre_prod, index) => {
          return (
            <Product
              data={pre_prod}
              id={index + 1}
              contentButton={"Order"}
              onHandleClick={() => addToCart(pre_prod)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Pre_order;
