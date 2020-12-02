import React from "react";
import img from "../../image/logo.svg";

const Footer = () => {
  return (
    <div className="container mx-auto flex justify-between pb-4">
      <img src={img} alt="" className="w-32" />

      <div className="text-white">
        <p className="text-right">© 2020 Assignment React</p>
        <p className="text-right">Create by HoangNH</p>
      </div>
    </div>
  );
};

export default Footer;
