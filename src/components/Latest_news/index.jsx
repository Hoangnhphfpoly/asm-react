import React, { useEffect, useState } from "react";
import New_big from "../New_big";
import Title from "../Title";

const Lastest_news = () => {
  const [news, setnews] = useState([]);

  useEffect(() => {
    const API_URL = `http://localhost:1337/posts?_sort=created_at:ASC&_limit=2`;
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setnews(data));
  }, []);

  return (
    <div className="container mx-auto pb-10">
      <Title span={""} content={"Lastest news"} />
      <div className="grid grid-cols-2 gap-8">
        {news.map((item) => {
          return <New_big key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};

export default Lastest_news;
