import React from "react";
import New_big from "../New_big";
import Title from "../Title";

const Lastest_news = () => {
  return (
    <div className="container mx-auto pb-10">
      <Title span={""} content={"Lastest news"} />
      <div className="grid grid-cols-2 gap-8">
        <New_big />
        <New_big />
      </div>
    </div>
  );
};

export default Lastest_news;
