import React from "react";
import { Play_IMG_CDN } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addSpotifyURI } from "../utils/spotifySlice";

const ArtistCards = ({ artist }) => {
  const dispatch = useDispatch()
 
  

  const { images, name, type } = artist;
  const setMusic = () => {
    dispatch(addSpotifyURI(artist.uri))
    console.log(artist.uri)
    
  }
  return (
    <div className="m-4 p-4 bg-gray-800 w-56 mx-2 rounded-xl h-80 relative group">
      <img
        className=" aspect-square rounded-full"
        src={images?.[0]?.url}
        alt="Artist"
      />
      <button onClick={setMusic} 
        className=" w-20 h-20 my-2 absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
          <img className="cursor-pointer" alt="Play" src={Play_IMG_CDN} />
        </button>
        <div className="py-8 px-2">
      <h1 className="font-bold text-xl">{name}</h1>
      <h3>{type}</h3>
      </div>
    </div>
  );
};

export default ArtistCards;
