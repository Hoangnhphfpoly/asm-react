import React from "react";

const Checkbox = ({ title }) => {
  return (
    <div className="flex items-center py-2">
      <input
        type="checkbox"
        name=""
        id=""
        className="bg-gray-900 border rounded "
      />{" "}
      <label htmlFor=""></label>
      <div className="px-2 text-sm">{title}</div>
    </div>
  );
};

export default Checkbox;
