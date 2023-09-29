import useSpotify from "../hooks/useSpotify";
import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const MainPage = () => {


  useSpotify();



  return (
    <div className="bg-black">
      <Header />
      <div className="grid grid-cols-12 mx-4">
        <SideBar />
        <Outlet />
      </div>
      
      {/* <Player /> */}
    </div>
  );
};

export default MainPage;
