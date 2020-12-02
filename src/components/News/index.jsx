import React, { useEffect, useState } from "react";
import New_small from "../New_small";
import Small_banner from "../Small_banner";

const News = () => {
  const [platform, setPlatform] = useState({});

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setPlatform({
      ...platform,
      [name]: value,
    });
  };

  useEffect(() => {
    if (
      platform.platform &&
      platform.platform !== "" &&
      platform.platform !== null
    ) {
      const API_URL = `http://localhost:1337/platforms/${platform.platform}`;
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => setNews(data.posts));
    } else {
      const API_URL = "http://localhost:1337/posts";
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => setNews(data));
    }
  }, [platform]);

  const [news, setNews] = useState([]);

  const count = news.length;

  return (
    <div>
      <Small_banner title={"News"} />
      <div className="container mx-auto flex justify-between text-base items-center text-white border border-gray-800 p-3 rounded-lg mt-10">
        <div className="grid grid-cols-2 gap-8">
          <div>
            Platform :{" "}
            <select
              name="platform"
              id=""
              onChange={onHandleChange}
              className="rounded-md bg-gray-900 border-purple-600 border"
            >
              <option value="">All Platform</option>
              <option value="1">WINDOW</option>
              <option value="4">MAC OS</option>
              <option value="2">XBOX</option>
              <option value="3">PLAYSTATION</option>
            </select>
          </div>
          {/* 
          <div>
            Sort By :{" "}
            <select
              name=""
              id=""
              onChange={onHandleChange}
              className="rounded-md bg-gray-900 border-purple-600 border"
            >
              <option value="">Choose orderby</option>
              <option value="desc">DESC</option>
              <option value="asc">ASC</option>
              <option value="">2</option>
            </select>
          </div> */}
        </div>
        <div>Found {count} posts</div>
      </div>
      <div className="container mx-auto grid grid-cols-3 gap-5 py-10">
        {news.map((item, index) => {
          return <New_small data={item} id={item.id} />;
        })}
        {/* <New_small /> */}
      </div>
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
        <div className="flex">
          <a href="#">
            <button
              className="bg-purple-800 bg-opacity-25 p-2  rounded-md text-sm 
                font-bold font-mono border-gray-700 border mr-3"
            >
              1
            </button>
          </a>
          <a href="#">
            <button
              className="bg-purple-800 bg-opacity-25 p-2  rounded-md text-sm 
                font-bold font-mono border-gray-700 border mr-3"
            >
              2
            </button>
          </a>
          <a href="#">
            <button
              className="bg-purple-800 bg-opacity-25 p-2  rounded-md text-sm 
                font-bold font-mono border-gray-700 border mr-3"
            >
              3
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;