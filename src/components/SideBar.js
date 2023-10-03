import React from "react";
import TopSideBar from "./TopSideBar";
import LibraryBar from "./LibraryBar";
import Header from "./Header";
import Player from "./Player";


const SideBar = () => {
  return <div className="col-span-3 h-full flex md:flex-col">
     
    <TopSideBar />
    {/* <LibraryBar /> */}
    <Player />
  </div>
};

export default SideBar;
