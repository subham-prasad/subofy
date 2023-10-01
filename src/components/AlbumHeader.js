import React from "react";
import { Link } from "react-router-dom";
import useAlbumDetails from "../hooks/useAlbumDetails";
import { useSelector } from "react-redux";

const AlbumHeader = ({ albumId }) => {

  useAlbumDetails(albumId);
  const albumDetails = useSelector((store) => store.spotify.albumDetails);
  
  if(!albumDetails) return null

  const { images, name, type, artists, release_date } = albumDetails;
  return (
    <div className="flex h-80 bg-slate-600 p-4">
      <img className="w-72 h-72 px-4" src={images?.[0]?.url} alt="Poster" />
      <div className="my-auto">
        <p>{type}</p>
        <h1 className="font-extrabold text-5xl">{name}</h1>
        <div className="flex p-2 ">
          {artists?.map((artist) => {
            return (
              <Link to={"/artist/" + artist?.id} key={artist?.id} className="hover:underline" >
                {artist?.name+" • "} 
              </Link>
            );
          })}
          <p>{ release_date}</p>
        </div>
      </div>
    </div>
  );
};

export default AlbumHeader;
