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

  const {images ,owner ,name ,tracks, url, type, description, followers } = playlistDetails
  return (
    <div className="flex h-80 bg-slate-600 p-4">
      <img className="w-72 h-72 px-4" src={images?.[0]?.url} alt="Poster" />
      <div className="my-auto">
        <p>{type}</p>
        <h1 className="font-extrabold text-5xl">{name}</h1>
        <h2>{description}</h2>
        <div className="flex p-2 ">
          <span className="hover:underline cursor-pointer">{owner?.display_name  } </span>
          <span>&nbsp;•&nbsp; Followers: {followers?.total }</span>
          <span>&nbsp;•&nbsp; {tracks?.items?.length + " songs"}</span>
        </div>
      </div>
    </div>
)
};

export default PlaylistHeader;
