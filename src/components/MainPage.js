import useSpotify from "../hooks/useSpotify";
import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Player from "./Player";

const MainPage = () => {
  useSpotify();

  return (
    <div className="bg-black h-screen ">
      <Header />
      <div className="grid grid-cols-12 mx-4 h-screen">
        <SideBar />
          <Outlet />

      </div>


    </div>
  );
};

export default MainPage;
