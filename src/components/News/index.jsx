import React, { useEffect, useState } from "react";
import New_small from "../New_small";
import Pagination from "../Pagination";
import Small_banner from "../Small_banner";
import axios from "axios";

const News = () => {
  const [platform, setPlatform] = useState({});
  const [news, setNews] = useState([]);
  const [paginate, setPaginate] = useState({
    limit: 3,
    start: 0,
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setPlatform({
      ...platform,
      [name]: value,
    });
    setPaginate({
      limit: 3,
      start: 0,
    });
  };

  const handlePageChange = (newPage) => {
    setPaginate({
      limit: 3,
      start: newPage,
    });
  };

  useEffect(() => {
    if (
      platform.platform &&
      platform.platform !== "" &&
      platform.platform !== null
    ) {
      const API_URL = `http://localhost:1337/posts?_where[0][platform.id]=${
        platform.platform
      }&_start=${
        paginate.start === 0 ? 0 : paginate.start * paginate.limit
      }&_limit=${paginate.limit}`;
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => setNews(data));
    } else {
      const API_URL = `http://localhost:1337/posts?_start=${
        paginate.start === 0 ? 0 : paginate.start * paginate.limit
      }&_limit=${paginate.limit}`;

      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          setNews(data);
        });
    }
  }, [platform, paginate]);

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

        <Pagination
          start={paginate.start}
          onPageChange={handlePageChange}
          count={count}
          limit={paginate.limit}
        />
      </div>
    </div>
  );
};

export default News;
