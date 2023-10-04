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
    <div className="flex w-full  p-4">
      <img className="w-1/3 h-1/3" src={images?.[0]?.url} alt="Poster" />
      <div className="my-auto h-2/3 w-2/3 px-2">
        <p>{type}</p>
        <h1 className="font-extrabold md:text-5xl ">{name}</h1>
        <div className="flex px-2 ">
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
