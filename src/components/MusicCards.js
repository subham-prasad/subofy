import React from "react";
import { Link } from "react-router-dom";
import { Play_IMG_CDN } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addSpotifyURI } from "../utils/spotifySlice";

const MusicCards = ({ album }) => {
  const dispatch = useDispatch();
  if (!album) return null;
  const { images, name, artists } = album;

  const setMusic = () => {
    dispatch(addSpotifyURI(album.uri));
  };

  return (
    <div className="m-4 p-4 bg-[#040406] hover:bg-[#3B3C36] w-36 mx-2 rounded-lg h-60 relative group">
      <img className="h-2/3 rounded-lg" src={images?.[0].url} alt="Album" />
      <button
        onClick={setMusic}
        className=" w-15 h-15 my-2 absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <img className="cursor-pointer" alt="Play" src={Play_IMG_CDN} />
      </button>

      <h1 className="font-bold truncate h-10">{name}</h1>

      <p className="truncate h-10">
        {artists.map((artist) => artist?.name).join(", ")}
      </p>
    </div>
  );
};

export default MusicCards;
