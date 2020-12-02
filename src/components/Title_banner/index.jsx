import React from "react";

const Title_banner = ({ content }) => {
  return (
    <div className="text-white font-mono text-3xl font-normal py-20">
      <span className="text-purple-500 pr-5">|</span>
      {content}
    </div>
  );
};

export default Title_banner;
