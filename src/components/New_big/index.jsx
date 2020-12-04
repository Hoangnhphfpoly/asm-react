import React from "react";
import { Link } from "react-router-dom";

const New_big = ({ data }) => {
  return (
    <div className="bg-img-big-new bg-auto h-auto ">
      <Link to={`/posts/${data.id}`}>
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
            <Link to={`/posts/${data.id}`}>
              <p className="text-2xl hover:text-blue-200 transition duration-500 ease-in-out font-light pr-6 truncate hover:underline">
                {data.title}
              </p>
            </Link>
          </div>

          <div className="flex justify-between">
            <div>{data.time} hours ago</div>
            <div>{data.comments} cmts</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default New_big;
