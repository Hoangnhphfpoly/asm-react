import React from "react";

const New_big = () => {
  return (
    <div className="bg-img-big-new bg-auto h-auto ">
      <a href="">
        <div className="text-white px-6 pb-6 pt-40">
          <button
            className="bg-purple-800 bg-opacity-25 px-6 rounded-md py-1 text-base 
        font-bold font-mono hover:bg-purple-500 transition duration-500 ease-in-out mt-6
        border-gray-400 border-2
        "
          >
            NFS
          </button>
          <div className="py-4">
            <a href="">
              <p className="text-2xl hover:text-blue-200 transition duration-500 ease-in-out font-light pr-6 truncate hover:underline">
                New hot race from your favorite computer games studio
              </p>
            </a>
          </div>

          <div className="flex justify-between">
            <div>2 hours ago</div>
            <div>17 cmts</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default New_big;
