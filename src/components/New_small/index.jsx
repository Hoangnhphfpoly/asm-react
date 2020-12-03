import React from "react";
// import img from "../../image/posts/3.jpg";

const New_small = ({ data }) => {
  return (
    <div className="text-white border border-solid border-gray-800 p-5 rounded">
      <a href="">
        <img src={data.img} alt="" className="w-auto rounded" />
      </a>
      <button
        disabled
        className="bg-purple-800 bg-opacity-25 px-8 rounded-md py-1 text-sm 
        font-bold font-mono hover:bg-purple-800 transition duration-500 ease-in-out mt-6
        border-gray-400 border-2
        "
      >
        {data.platform.name}
      </button>
      <a href="" className="hover:underline hover:text-purple-700">
        <p className="text-2xl truncate py-5"> {data.title}</p>
      </a>
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="text-sm text-purple-700 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="20"
              height="20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-white text-sm">5 hours ago</p>
        </div>
        <div className="flex items-center">
          <div className="text-sm text-purple-700 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="20"
              height="20"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
          <p className="text-white text-sm">{data.comments}</p>
        </div>
      </div>
    </div>
  );
};

export default New_small;
