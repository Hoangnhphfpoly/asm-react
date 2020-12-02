import React, { useContext, useState } from "react";
import Small_banner from "../Small_banner";
import { CartContext } from "../../context/Cart";
import Swal from "sweetalert2";

const Cart = () => {
  const { cartItems, removeItem, removeAllItem } = useContext(CartContext);
  const [info, setInfo] = useState({});

  let count = 0;

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
    if (info) {
      Swal.fire(
        "Success!",
        "Please check mail for detail your order!",
        "success"
      );
    } else if (info.name && info.name !== "") {
      Swal.fire("Fail!", "Please fill your infomation!", "error");
    }
  };

  cartItems.map((item) => {
    count = count + item.price;
  });

  return (
    <div className="">
      <Small_banner title={"Checkout"} />
      <div className="grid grid-cols-3 container mx-auto mt-10 my-4">
        <div className="col-span-2 text-white ">
          <div className="border-2 ml-2 rounded border-gray-800 p-4">
            <div className="grid grid-cols-8 justify-items-center place-items-center pb-2 text-xl font-semibold">
              <div className="grid-cols-1">Product</div>
              <div className="col-span-4">Name</div>
              <div className="col-span-1">Platform</div>
              <div className="col-span-1">Price</div>
              <div className="col-span-1">
                <a
                  href=""
                  className="text-sm hover:text-purple-600 hover:underline"
                >
                  Remove all
                </a>
              </div>
            </div>
            {cartItems.map((item, index) => (
              <div className="grid grid-cols-8 justify-items-center place-items-center pb-6">
                <div className="col-span-1">
                  <img
                    src={item.image_url}
                    alt=""
                    className="w-24 rounded-md"
                  />
                </div>
                <div className="col-span-4">
                  <p>{item.name}</p>
                </div>
                <div className="col-span-1">
                  <p>{item.platform.name}</p>
                </div>
                <div className="col-span-1">
                  <p>{item.price}$</p>
                </div>
                <div className="col-span-1">
                  <button
                    className="hover:text-purple-600"
                    onClick={() => removeItem(item.id)}
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width="24"
                        height="24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            ))}
            <div className="grid grid-cols-8 justify-items-center place-items-center pb-2 text-xl font-semibold mt-6">
              <div className="grid-cols-1">Total: {count}$</div>
              <div className="col-span-4"></div>
              <div className="col-span-1"></div>
              <div className="col-span-1"></div>
              <div className="col-span-1"></div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="border-2 ml-2 rounded border-gray-800 p-4">
            <form action="" onSubmit={onHandleSubmit}>
              <div className="mb-5">
                <input
                  className="w-full bg-gray-900 p-3 border border-gray-800 rounded text-white hover:border-purple-600 focus:border-purple-600"
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={onHandleChange}
                />
              </div>
              <div className="mb-5">
                <input
                  className="w-full bg-gray-900 text-white p-3 border border-gray-800 rounded hover:border-purple-600 focus:border-purple-600"
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={onHandleChange}
                />
              </div>
              <div className="">
                <input
                  className="w-full bg-gray-900 text-white p-3 border border-gray-800 rounded hover:border-purple-600 focus:border-purple-600"
                  type="text"
                  placeholder="Phone number"
                  name="phone_number"
                  onChange={onHandleChange}
                />
              </div>
              <button className="bg-green-500 px-8 rounded-md py-2 text-base font-bold font-mono hover:bg-purple-500 transition duration-500 ease-in-out mt-6">
                Accept
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
