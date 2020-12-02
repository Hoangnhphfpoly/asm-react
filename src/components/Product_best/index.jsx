import React from "react";
import img1 from "../../image/cards/1.jpg";
import ps4 from "../../image/ps4.png";
import xbox from "../../image/xbox.png";
import window from "../../image/window.png";
import { Link } from "react-router-dom";

const Product_best = ({ data }) => {
  return (
    <div className="border rounded bg-gray-900 border-gray-900 p-4 flex">
      <Link to={`/products/${data.id}`}>
        <img src={data.image_url} alt="" className="rounded" />
      </Link>
      <div className="grid grid-rows-2 text-white px-4">
        <div>
          <Link to={`/products/${data.id}`} className="hover:text-purple-500">
            <h2 className="text-2xl font-semibold pb-4">{data.name}</h2>
          </Link>
          <p>
            <span className="font-medium pb-1 text-base text-gray-400">
              Release date:
            </span>{" "}
            30.11.2018
          </p>
          <p>
            <span className="font-medium pb-1 text-base text-gray-400">
              {" "}
              Genres:{" "}
            </span>{" "}
            Simulation, Action, Sci-fi
          </p>
          <div className="flex py-4">
            <div className="rounded-full h-8 w-8 flex items-center justify-center bg-purple-700 p-2 mr-2">
              <img src={ps4} alt="" />
            </div>
            <div className="rounded-full h-8 w-8 flex items-center justify-center bg-green-600 p-2 mr-2">
              <img src={xbox} alt="" />
            </div>
            <div className="rounded-full h-8 w-8 flex items-center justify-center bg-blue-600 p-2 mr-2">
              <img src={window} alt="" />
            </div>
          </div>
        </div>
        <div className="pt-8">
          <p className="text-3xl font-bold">${(data.price * 70) / 100}</p>
          <p className="text-red-500 font-semibold">
            <span className="pr-4 text-gray-400 line-through">
              ${data.price}
            </span>
            30% OFF
          </p>
          <Link to={`/products/${data.id}`}>
            <button className="bg-green-500 px-8 rounded-md py-2 text-base font-bold font-mono hover:bg-purple-500 transition duration-500 ease-in-out mt-6">
              Buy now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product_best;
