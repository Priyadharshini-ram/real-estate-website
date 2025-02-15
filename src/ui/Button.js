import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-white rounded ${className || "bg-blue-500"}`}
    >
      {children}
    </button>
  );
};

export default Button;
