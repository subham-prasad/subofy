import React from "react";
import usePlaylistItems from "../hooks/usePlaylistItems";
import { useSelector } from "react-redux";
import PlaylistItemsLong from "./PlaylistItemsLong";

const PlaylistItems = ({ playlistId }) => {
  usePlaylistItems(playlistId);

  const playlistItems = useSelector((store) => store.playlist?.playlistItems);

  if (!playlistItems) return null;

  const {items} = playlistItems

  return <div>
    {items?.map((item,index)=>{
      return (
        <PlaylistItemsLong item={item} key={item?.id} number={index + 1}/>
      )
    })}
  </div>;
};

export default PlaylistItems;
