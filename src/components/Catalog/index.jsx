import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/Cart";
import Product from "../Product";
import Small_banner from "../Small_banner";
import Pagination from "../Pagination";

const Catalog = () => {
  const { addToCart } = useContext(CartContext);

  const [products, setProduct] = useState([]);

  const [keyword, setKeyword] = useState({});

  const [count, setCount] = useState(0);

  const [paginate, setPaginate] = useState({
    limit: 4,
    start: 0,
  });

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setKeyword({
      ...keyword,
      [name]: value,
    });
    setPaginate({
      limit: 4,
      start: 0,
    });
  };

  const clearKeyword = (e) => {
    // form.reset();
    e.preventDefault();
    setKeyword({});
  };

  const handleOnPageChange = (newPage) => {
    setPaginate({
      limit: 4,
      start: newPage,
    });
  };

  useEffect(() => {
    if (keyword !== {}) {
      let API_URL = `http://localhost:1337/products?`;

      if (keyword.platform) {
        API_URL = `${API_URL}_where[0][platform.id]=${keyword.platform}&`;
      }
      if (keyword.name) {
        API_URL = `${API_URL}_where[1][name]=${keyword.name}&`;
      }
      if (keyword.sort) {
        API_URL = `${API_URL}_sort=price:${keyword.sort}&`;
      }

      const getData = async () => {
        API_URL = `${API_URL}_start=${
          paginate.start === 0 ? 0 : paginate.start * paginate.limit
        }&_limit=${paginate.limit}`;
        console.log(API_URL);
        const response = await fetch(API_URL);
        const data = await response.json();
        await setProduct(data);
        await setCount(products.length);
        // fetch(API_URL)
        // .then((response) => response.json())
        // .then((data) => setProduct(data));
      };
      getData();
    }
  }, [keyword, paginate]);

  return (
    <div>
      <Small_banner title={"Catalog"} />
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-3 text-white mt-10 py-10">
          <div className="col-span-1">
            <div className="flex justify-between items-center">
              <p className="text-xl font-bold">Filters</p>
              <a
                href=""
                onClick={clearKeyword}
                className="text-sm hover:text-red-600"
              >
                Clear all
              </a>
            </div>
            <form action="" onSubmit={onHandleSubmit} className="mt-8">
              <div className="py-2">
                <label htmlFor="" className="text-base">
                  Keyword:
                </label>
                <input
                  type="text"
                  onChange={onHandleSubmit}
                  name="name"
                  id=""
                  placeholder="Keywords"
                  className="w-full bg-gray-900 border rounded border-gray-800 mt-2"
                />
              </div>

              <div className="py-2">
                <label htmlFor="" className="text-base">
                  Sort by:
                </label>
                <div>
                  <select
                    onChange={onHandleSubmit}
                    name="sort"
                    id=""
                    className="w-full bg-gray-900 border rounded border-gray-800 mt-2"
                  >
                    <option value="">Choose orderby</option>
                    <option value="desc">DESC</option>
                    <option value="asc">ASC</option>
                  </select>
                </div>
              </div>

              <div className="py-2">
                <label htmlFor="" className="text-base">
                  Price:
                </label>
                <input
                  onChange={onHandleSubmit}
                  type="range"
                  name=""
                  id=""
                  placeholder="Keywords"
                  className="w-full bg-gray-900 border rounded border-gray-800 mt-2"
                />
              </div>

              <div className="py-2">
                <label htmlFor="" className="text-base">
                  Platforms:
                </label>
                <select
                  onChange={onHandleSubmit}
                  name="platform"
                  id=""
                  className="w-full bg-gray-900 border rounded border-gray-800 mt-2"
                >
                  <option value="">Choose Platform</option>
                  <option value="1">WINDOW</option>
                  <option value="4">MAC OS</option>
                  <option value="2">XBOX</option>
                  <option value="3">PLAYSTATION</option>
                </select>
              </div>
            </form>
          </div>
          <div className="col-span-4 ">
            <div className="grid grid-cols-4 gap-5">
              {products.map((product, index) => {
                if (product.status === 1) {
                  return (
                    <Product
                      data={product}
                      key={index + 1}
                      contentButton={"Add to cart"}
                      onHandleClick={() => addToCart(product)}
                    />
                  );
                } else {
                  return (
                    <Product
                      data={product}
                      key={index + 1}
                      contentButton={"Order"}
                    />
                  );
                }
              })}
            </div>
            <div>
              <div className="flex justify-between container mx-auto text-white pb-10 pt-6">
                <button
                  disabled
                  className="bg-purple-800 bg-opacity-25 p-2 rounded-md text-sm 
        font-bold font-mono  
        border-gray-700 border
        "
                >
                  {count} from {count}
                </button>
                <Pagination
                  onPageChange={handleOnPageChange}
                  count={count}
                  start={paginate.start}
                  limit={paginate.limit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
