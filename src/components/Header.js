import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );
        // navigate("/");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {

      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="bg-black text-white flex justify-between p-4 mx-4 h-16">
      
      <img
        className="w-1/10"
        alt="Logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
      />

<button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Header;
