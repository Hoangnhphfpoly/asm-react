import React from "react";
import Small_banner from "../Small_banner";
import Title from "../Title";

const Contact = () => {
  return (
    <div className="mb-10">
      <Small_banner title={"Contact"} />
      <div className="container mx-auto grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <div>
            <Title span={""} content={"Contact form"}></Title>
          </div>
          <div className="border-2 ml-2 rounded border-gray-800 p-4">
            <form action="">
              <div className="mb-5">
                <input
                  className="w-full bg-gray-900 p-3 border border-gray-800 rounded text-white hover:border-purple-600 focus:border-purple-600"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="mb-5">
                <input
                  className="w-full bg-gray-900 text-white p-3 border border-gray-800 rounded hover:border-purple-600 focus:border-purple-600"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="mb-5">
                <input
                  className="w-full bg-gray-900 text-white p-3 border border-gray-800 rounded hover:border-purple-600 focus:border-purple-600"
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-5">
                <input
                  className="w-full bg-gray-900 text-white p-3 border border-gray-800 rounded hover:border-purple-600 focus:border-purple-600"
                  type="file"
                  placeholder="Subject"
                />
              </div>
              <div className="">
                <textarea
                  className="w-full h-40 text-white bg-gray-900 p-3 border border-gray-800 rounded hover:border-purple-600 focus:border-purple-600"
                  placeholder="Type your message..."
                ></textarea>
              </div>
              <button className="bg-green-500 px-8 rounded-md py-2 text-base font-bold font-mono hover:bg-purple-500 transition duration-500 ease-in-out mt-6">
                Accept
              </button>
            </form>
          </div>
        </div>
        <div className="col-span-1">
          <div>
            <Title span={""} content={"Info"}></Title>
          </div>
          <div className="ml-3">
            <p className="text-white text-lg pb-8">
              We always respect your suggestions to improve our services
            </p>

            <div className="flex items-center">
              <div className="text-xl text-purple-700 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="25"
                  height="25"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <p className="text-white text-lg">: (+84) 326 972 525</p>
            </div>

            <div className="flex items-center">
              <div className="text-xl text-purple-700 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="25"
                  height="25"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
              </div>
              <p className="text-white text-lg">: hoangnhfpl@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
