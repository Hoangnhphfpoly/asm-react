import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Button from "../Button";

const Product = ({ data, link, contentButton, onHandleClick }) => {
  return (
    <div className="flex-col-reverse rounded-md text-white border-solid border-2 border-gray-800">
      <Link to={`/products/${data.id}`}>
        <img src={data.image_url} alt="None" className="w-screen" />
      </Link>

      <div className="p-3">
        <Link to={`/products/${data.id}`} className="hover:text-purple-600">
          <div className="text-xl overflow-x-visible pt-1">{data.name}</div>
        </Link>

        <p className="text-xl font-semibold pt-3">${data.price}</p>

        <Button content={contentButton} link={link} onClick={onHandleClick} />
        {/* <Link to={`/products/${data.id}`}>
          <button className="bg-green-500 rounded-md px-8 py-2 mt-6 text-base font-bold font-mono hover:bg-purple-500 transition duration-500 ease-in-out">
            Buy
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default Product;
