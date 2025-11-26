import React from "react";
import GlobalRankingsPane from "./GlobalRankingsPane";

const GlobalRankings = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-white text-3xl">The Peanut Gallery</h1>
        <div className="m-5 flex flex-row gap-41">
          <GlobalRankingsPane />
          <GlobalRankingsPane />
          <GlobalRankingsPane />
        </div>
      </div>
    </>
  );
};

export default GlobalRankings;
