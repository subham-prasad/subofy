import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHouse,
  faMagnifyingGlass,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { toggleMenu } from "../utils/menuSlice";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const SideBar = () => {
  const navigate = useNavigate();
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {

      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div
      className={` h-full flex md:flex-col bg-[#121212] text-gray-600 m-2 rounded-xl px-4 text-2xl`}
    >
      <FontAwesomeIcon
        icon={faBars}
        onClick={toggleMenuHandler}
        className="text-white py-5 hidden md:block"
      />
      <ul className="flex md:flex-col">
        <Link to="/">
          <li className="hover:text-white text-black flex p-1">
            <FontAwesomeIcon icon={faHouse} />
            {isMenuOpen && <h1 className="text-white pl-3 hidden md:block"> Home</h1>}
          </li>
        </Link>
        <Link to="/search">
          <li className="hover:text-white text-black flex p-1">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            {isMenuOpen && <h1 className="text-white pl-3 hidden md:block"> Search</h1>}
          </li>
        </Link>
      </ul>
      <div>
        <FontAwesomeIcon icon={faRightFromBracket} className={`hover:text-white`}
        onClick={handleSignOut}/> 
      </div>
    </div>
  );
};

export default SideBar;
