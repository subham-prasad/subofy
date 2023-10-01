import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useAlbumDetails from "../hooks/useAlbumDetails";
import TrackCard from "./TrackCard";
import AlbumHeader from "./AlbumHeader";
import useAlbumTracks from "../hooks/useAlbumTracks";
import AlbumTrackList from "./AlbumTracks";
import ArtistAlbumList from "./ArtistAlbumList";

const Album = () => {
  const { id } = useParams();

  const albumDetails = useSelector(store => store.spotify.albumDetails)
  // console.log("Hi" + albumDetails.tracks.items);

  return (
    <div className="m-1 col-span-8 rounded-xl bg-[#121212] text-white p-10 overflow-y-scroll h-screen">
      <AlbumHeader albumId={id} />
      <hr />
      <div>
        <button className="w-20">
          <img
            alt="Play"
            src={
              "https://jccdallas.org/wp-content/uploads/2020/06/Spotify-Play-Button.png"
            }
          />
        </button>
      </div>
      <AlbumTrackList albumId={id} />

      <ArtistAlbumList title={"More By" + albumDetails?.artists?.[0]?.name } artistId={albumDetails?.artists?.[0]?.id} />      
      <div>
        More By
      </div>
    </div>
  );
};

export default Album;
