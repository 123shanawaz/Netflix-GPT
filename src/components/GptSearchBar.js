import React from "react";
import { useSelector } from "react-redux";
import { Language } from "../utils/Language";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col- col-span-9"
          placeholder={Language[langkey].gptSearchPlaceholder}
        ></input>
        <button className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4 ">
          {Language[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
