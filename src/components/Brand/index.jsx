import React from "react";
import img from "../../image/partners/themeforest-light-background.png";

const Brand = () => {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-10 my-4 py-16 border-b-2 border-gray-800">
      <img src={img} alt="" />
      <img src={img} alt="" />
      <img src={img} alt="" />
      <img src={img} alt="" />
      <img src={img} alt="" />
      <img src={img} alt="" />
    </div>
  );
};

export default Brand;
