import React from "react";
import { Link } from "react-router-dom";
import { Play_IMG_CDN } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addSpotifyURI } from "../utils/spotifySlice";

const MusicCards = ({ album }) => {
  const { images, name, artists } = album;

  const dispatch = useDispatch()
 
  const setMusic = () => {
    dispatch(addSpotifyURI(album.uri))
  }

  return (
    <div className="m-4 p-4 bg-gray-800 w-56 mx-2 rounded-xl h-80 relative group">
  
      <img className="w-30" src={images?.[0].url} alt="Album" />
      <button onClick={setMusic} 
        className=" w-20 h-20 my-2 absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
          <img className="cursor-pointer" alt="Play" src={Play_IMG_CDN} />
        </button>
  
      <h1 className="font-bold">{name}</h1>

      <p>{artists.map((artist) => artist?.name + " ")}</p>
    </div>
  );
};

export default MusicCards;
