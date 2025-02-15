import React from "react";

const Input = ({ type, placeholder, name, value, onChange, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full p-2 border rounded ${className || "border-gray-300"}`}
    />
  );
};

export default Input;
