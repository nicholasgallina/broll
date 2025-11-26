import React from "react";

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-md">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
        🔍
      </span>
      <div className="flex items-center justify center">
        <input
          type="search"
          id="search"
          placeholder="Fill the void..."
          className="bg-linear-to-r from-white to-black backdrop-blur-md
 hover:bg-linear-to-r from-white/40 to-white text-gray-100 hover:text-white w-220 p-3 pl-10 rounded-full focus:outline-none focus:ring-0 focus:border-gray-300
        transition-all duration-300 ease-out
        hover:border-2 hover:border-gray-100 hover:color-gray-300 hover:shadow-lg hover:shadow-gray-400/2"
        ></input>
      </div>
    </div>
  );
};

export default SearchBar;
