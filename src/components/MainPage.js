import useSpotify from "../hooks/useSpotify";
import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Player from "./Player";
import { useSelector } from "react-redux";

const MainPage = () => {
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);
  useSpotify();

  return (
    <div className="bg-black flex flex-col h-screen  ">
      <div className="-z-10 hidden">
      <Header />
      </div>
      <div
        className="md:grid md:grid-cols-12 mx-4 flex flex-col-reverse overflow-y-auto 
       scrollbar scrollbar-track-transparent scrollbar-thumb-slate-800 scrollbar-track-rounded-md
       md:scrollbar-none"
      >
        <div
          className={`${
            isMenuOpen ? "col-span-2" : "col-span-1"
          } md:min-h-full`}
        >
          <SideBar />
        </div>
        <div
          className={`${
            isMenuOpen ? "col-span-10" : "col-span-11"
          }  rounded-xl bg-[#121212] text-white
          overflow-y-auto 
       scrollbar scrollbar-track-transparent scrollbar-thumb-slate-800 scrollbar-track-rounded-md
         `}
        >
          <Outlet />
        </div>
      </div>
      <div className=" h-1/6 m-2 opacity-50 hover:opacity-100 md:opacity-100">
        <Player />
      </div>
    </div>
  );
};

export default MainPage;
