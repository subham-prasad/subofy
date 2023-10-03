import React from "react";
import useAlbumTracks from "../hooks/useAlbumTracks";
import { useSelector } from "react-redux";
import TrackCard from "./TrackCard";

const AlbumTrackList = ({ albumId }) => {
  useAlbumTracks(albumId);

  const albumTracks = useSelector((store) => store.spotify.albumTracks);

  if (!albumTracks) return null;

  const { items } = albumTracks;

  return (
    <div>
      {items?.map((item, index) => {
        return <TrackCard item={item} key={item?.id} number={index + 1} />;
      })}
    </div>
  );
};

export default AlbumTrackList;
