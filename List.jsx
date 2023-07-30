import React from "react";

export const List = ({ id, image, name, age }) => {
  return (
    <div className="flex justify-start space-x-4">
      <img
        src={image}
        alt={name}
        className="mb-4 ml-4 w-[60px] rounded-full h-[60px]"
      />
      <div>
        <h1
          className="font-semibold line-clamp-2
        "
        >
          {name}
        </h1>
        <p>{age} years</p>
      </div>
    </div>
  );
};
