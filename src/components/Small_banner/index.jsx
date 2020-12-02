import React from "react";
import Title_banner from "../Title_banner";

const Small_banner = ({ title }) => {
  return (
    <div className="bg-best-game bg-auto pt-20">
      <div className="container mx-auto">
        <Title_banner content={title} />
      </div>
    </div>
  );
};

export default Small_banner;
