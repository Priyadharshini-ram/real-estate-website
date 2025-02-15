import React from "react";

const Textarea = ({ placeholder, name, value, onChange, className }) => {
  return (
    <textarea
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full p-2 border rounded ${className || "border-gray-300"}`}
    />
  );
};

export default Textarea;
