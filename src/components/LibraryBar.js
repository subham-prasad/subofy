import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const LibraryBar = () => {
  const access_token = useSelector((store) => store.spotify.accessToken);


  useEffect(() => {
    // getData();
  });

  const getData = async () => {
    const data = await fetch(
      "https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy",
      {
        headers: {
          Authorization: "Bearer " + access_token,
        },
        method: "GET",
      }
    );
    const json = await data.json();

  };
  return (
    <div className=" bg-[#121212] text-gray-600 m-2 rounded-xl py-52">
      <ul className="p-4 text-xl">
        <li className="hover:text-white ">📚 Library</li>
      </ul>
    </div>
  );
};

export default LibraryBar;
