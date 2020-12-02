import React, { useContext, useEffect, useState } from "react";
import Latest_releases from "../Latest_releases";
import img from "../../image/details/4.jpg";
import { useParams } from "react-router-dom";
import ps4 from "../../image/ps4.png";
import xbox from "../../image/xbox.png";
import window from "../../image/window.png";
import { CartContext } from "../../context/Cart";

const Detail_product = () => {
  const { addToCart, cartItems } = useContext(CartContext);

  let { id } = useParams();

  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      let API_URL = `http://localhost:1337/products/${id}`;
      const response = await fetch(API_URL);
      const data = await response.json();
      setProduct(data);
    };
    getProduct();
  }, [id]);

  useEffect(() => {
    const API_URL = "http://localhost:1337/products?_limit=5";
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const getGense = (product) => {
    return product.genres.map((genre) => {
      return (
        <button
          type="button"
          disabled
          className=" bg-purple-500 px-6 mx-2 rounded-md py-1 text-sm font-bold font-mono hover:bg-green-500 transition duration-500 ease-in-out "
        >
          {genre.name}
        </button>
      );
    });
  };

  return (
    <div className="text-white pt-32 container mx-auto">
      <div className="border border-gray-800">
        <div className="grid grid-cols-5 gap-3">
          <div className="col-span-4">
            <div className="flex">
              <img src={product.image_url} alt="" className="p-5" />
              <div className="text-xl">
                <p className="text-5xl pb-6">{product.name}</p>
                <div className="flex items-center">
                  <p>Genres: </p>
                  {product.genres ? getGense(product) : ""}
                </div>
                <p className="py-1">Developer: Envato Game Dev</p>
                <p>Lenguenges: English, German, French, Russian</p>
                <div className="overflow-auto h-32 text-base mt-10">
                  {product.description}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 p-2">
            <p className="pt-2">Available on platforms:</p>
            <div className="flex py-4 mb-4">
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
            <div className="text-lg pt-12">PRICE :</div>
            <div className="text-3xl font-bold">$ {product.price}</div>
            <button
              onClick={() => addToCart(product)}
              className="bg-green-500 px-8 rounded-md py-2 w-full text-base font-bold font-mono hover:bg-purple-500 transition duration-500 ease-in-out mt-8"
            >
              Add to cart
            </button>
            <button className="bg-green-500 px-8 rounded-md py-2 w-full text-base font-bold font-mono hover:bg-purple-500 transition duration-500 ease-in-out mt-4">
              Buy as a gift
            </button>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-2 justify-items-center">
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img} alt="" />
        </div>
      </div>
      <Latest_releases products={products} />
    </div>
  );
};

export default Detail_product;
