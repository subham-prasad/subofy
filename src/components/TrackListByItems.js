import React from "react";
import usePlaylistItems from "../hooks/usePlaylistItems";
import { useSelector } from "react-redux";
import PlaylistItemsLong from "./PlaylistItemsLong";
import TrackCard from "./TrackCard";

const TrackListByItems = ({ title,tracks }) => {

  if (!tracks) return null;

  const {items} = tracks

  const items1 = items.slice(0,5)
  // console.log(playlistItems)
  return <div>
    {items1?.map((item)=>{
      return (
        <TrackCard item={item} />
      )
    })}
  </div>;
};

export default TrackListByItems;
