import React from "react";
import TrackCard from "./TrackCard";
import { Link } from "react-router-dom";

const TrackList = ({title , tracks}) => {
  if(!tracks) return null
  

  return <div className="m-3 p-4" >
<h1 className="font-bold text-2xl">{title}</h1>
    {
    tracks.map((track)=>{
      return (
        <TrackCard item = {track} key={track?.id} />
      )
    })}
  </div>;
};

export default TrackList;
