import React from "react";

const Title = ({ span, content }) => {
  return (
    <div className="text-white font-mono text-4xl font-normal pb-6 pt-20">
      <span className="text-purple-500">|</span>
      <span className="font-bold">{span}</span> {content}
    </div>
  );
};

export default Title;
