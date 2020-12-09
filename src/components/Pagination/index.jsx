import React from "react";

const Pagination = ({ onPageChange, start, count, limit }) => {
  const onHandlePageChange = (newPage) => {
    if (onPageChange) {
      onPageChange(newPage);
    }
  };

  const total = Math.ceil(count / limit) + 1;

  return (
    <div>
      <button
        className="bg-purple-800 bg-opacity-25 p-2  rounded-md text-sm 
                font-bold font-mono border-gray-700 border mr-3"
        onClick={() => onHandlePageChange(start - 1)}
        disabled={start === 0}
      >
        Prev
      </button>
      <button
        className="bg-purple-800 bg-opacity-25 p-2  rounded-md text-sm 
                font-bold font-mono border-gray-700 border mr-3"
        onClick={() => onHandlePageChange(start + 1)}
        disabled={start === total}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
