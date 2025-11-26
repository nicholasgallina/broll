import React from "react";
import SearchBar from "./SearchBar";
import HeaderButton from "./HeaderButton";
import HomeButtonImg from "../app/assets/home-icon.png";
import AccountButtonImg from "../app/assets/account-icon.png";

const Header = () => {
  return (
    <>
      <div
        className="h-22 flex items-center justify-between px-4"
        style={{
          backgroundImage: "url('/images/broll-header.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <HeaderButton link="/" image={HomeButtonImg.src} />
        <SearchBar></SearchBar>
        <HeaderButton
          link="/account"
          image={AccountButtonImg.src}
          height={55}
          width={50}
        />
      </div>
    </>
  );
};

export default Header;
