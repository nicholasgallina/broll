"use client";

import SearchBar from "./SearchBar";
import HeaderButton from "./HeaderButton";
import HomeButtonImg from "../app/assets/home-icon.png";
import AccountButtonImg from "../app/assets/account-icon.png";

//user state
const user = { isLoggedIn: false }; //TODO: auth state

const Header = () => {
  const userType = user?.isLoggedIn ? "loggedIn" : undefined;

  const accountRoutes = {
    loggedIn: "/account",
    default: "/signup",
  };

  return (
    <div
      className="h-22 flex items-center justify-between px-4"
      style={{
        backgroundImage: "url('/images/broll-header.png')",
        backgroundSize: "cover",
        backgroundPosition: "center 35%",
      }}
    >
      {/* HOME */}
      <HeaderButton destinationRules={{ default: "/" }}>
        <img
          src={HomeButtonImg.src}
          alt="Home"
          className="w-20 h-20 object-contain cursor-pointer  transition duration-200 hover:scale-105"
        />
      </HeaderButton>

      <SearchBar></SearchBar>

      {/* ACCOUNT */}
      <HeaderButton userType={userType} destinationRules={accountRoutes}>
        <img
          src={AccountButtonImg.src}
          alt="Account"
          className="w-15 h-15 object-contain cursor-pointer  transition duration-200 hover:scale-105"
        />
      </HeaderButton>
    </div>
  );
};

export default Header;
