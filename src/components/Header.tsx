import React from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <>
      <div className="bg-black h-18 flex items-center justify-center px-4">
        <SearchBar></SearchBar>
      </div>
    </>
  );
};

export default Header;
