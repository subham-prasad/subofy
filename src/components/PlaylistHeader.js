import React from "react";
import { useSelector } from "react-redux";
import usePlaylistDetails from "../hooks/usePlaylistDetails";
import { Link } from "react-router-dom";

const PlaylistHeader = ({ playlistId }) => {
  usePlaylistDetails(playlistId)

//   console.log(playlistId)
  const playlistDetails = useSelector(
    (store) => store.playlist.playlistDetails
  );

  if (!playlistDetails) return null;

  const {images ,owner ,name ,tracks, type, description, followers } = playlistDetails
  return (
    <div className="flex w-full p-4">
      <img className="w-1/3 h-1/3" src={images?.[0]?.url} alt="Poster" />
      <div className="my-auto h-2/3 w-2/3 px-2">
        <p>{type}</p>
        <h1 className="font-extrabold text-2xl md:text-5xl">{name}</h1>
        <h2>{description}</h2>
        <div className="flex ">
          <span className="hover:underline cursor-pointer">{owner?.display_name  } </span>
          <span>&nbsp;•&nbsp; Followers: {followers?.total }</span>
          <span>&nbsp;•&nbsp; {tracks?.items?.length + " songs"}</span>
        </div>
      </div>
    </div>
)
};

export default PlaylistHeader;
