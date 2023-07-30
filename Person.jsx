import React, { useState } from "react";
import Data from "./data";
import { List } from "./List";

export const Person = () => {
  const [personData, setPersonData] = useState(Data);

  return (
    <>
      <div className="max-w-md border border-gray-200 mx-auto mt-[5rem] shadow-xl bg-white rounded">
        <h1 className="text-xl pl-3 font-semibold font-sans mb-6 mt-6">
          {personData.length} Birthdays today
        </h1>
        {personData.map((ele) => {
          return <List key={ele.id} {...ele} />;
        })}
        <button
          onClick={() => setPersonData([])}
          className="border border-gray-300 w-[90%] block mx-auto bg-blue-600 text-white px-2 py-1 mb-4 rounded hover:bg-blue-800"
        >
          Clear All
        </button>
      </div>
    </>
  );
};
