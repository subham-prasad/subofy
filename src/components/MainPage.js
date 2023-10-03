import useSpotify from "../hooks/useSpotify";
import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Player from "./Player";

const MainPage = () => {
  useSpotify();

  return (
    <div className="bg-black h-full ">
      <Header />
      <div className="md:grid md:grid-cols-12 mx-4 h-screen flex flex-col">
        
        <SideBar />
          <Outlet />

      </div>


    </div>
  );
};

export default MainPage;
