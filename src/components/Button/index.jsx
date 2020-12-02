import React from "react";
import { Link } from "react-router-dom";

const Button = ({ link, content, onClick }) => {
  return (
    <Link to={link}>
      <button
        onClick={onClick}
        className="bg-green-500 px-8 rounded-md py-2 text-base font-bold font-mono hover:bg-purple-500 transition duration-500 ease-in-out mt-6"
      >
        {content}
      </button>
    </Link>
  );
};
export default Button;
