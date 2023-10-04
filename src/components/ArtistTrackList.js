import React from "react";
import TrackCard from "./TrackCard";
import { Link } from "react-router-dom";
import useArtistTopTracks from "../hooks/useArtistTopTracks";
import { useSelector } from "react-redux";

const ArtistTrackList = ({ title, artistId }) => {
  useArtistTopTracks(artistId);
  const artistTopTracks = useSelector((store) => store.artist.artistTopTracks);

  if (!artistTopTracks) return null;

  const { tracks } = artistTopTracks;

  

  return (
    <div className="m-3 p-4">
      <h1 className="font-bold text-xl  md:text-2xl">{title}</h1>
      { tracks && tracks.map((track) => {
        return <TrackCard item={track} key={track?.id} />;
      })}
    </div>
  );
};

export default ArtistTrackList;
