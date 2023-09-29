import React from "react";
import TopSideBar from "./TopSideBar";
import LibraryBar from "./LibraryBar";


const SideBar = () => {
  return <div className="col-span-4">
    <TopSideBar />
    <LibraryBar />
  </div>
};

export default SideBar;
