import React from "react";
import { Link } from "react-router-dom";

const MusicCards = ({ album }) => {
  const { images, name, artists } = album;

  return (
    <div className="m-4 p-4 bg-gray-800 w-56 mx-2 rounded-xl h-80">
      <img className="w-30" src={images?.[0].url} alt="Album" />
      <h1 className="font-bold">{name}</h1>

      <p>{artists.map((artist) => artist?.name + " ")}</p>
    </div>
  );
};

export default MusicCards;
