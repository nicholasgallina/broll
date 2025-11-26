"use client"; // Required if using useEffect in App Router

import { useEffect } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TestBrand from "../components/TestBrand";
import SearchBar from "../components/SearchBar";
import LoginForm from "../components/LoginForm";
import GlobalRankings from "../components/GlobalRankings";

export default function Home() {
  // Disable scrolling on this page
  useEffect(() => {
    document.body.style.overflow = "hidden"; // disables scroll

    return () => {
      document.body.style.overflow = "auto"; // restores scroll when leaving
    };
  }, []);

  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="flex gap-80">
          <LoginForm />
          <GlobalRankings />
        </div>
      </div>
    </>
  );
}
