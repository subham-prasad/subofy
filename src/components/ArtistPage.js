import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import useArtistAlbums from "../hooks/useArtistAlbums";

import ArtistList from "./ArtistList";
import ArtistTrackList from "./ArtistTrackList";
import ArtistHeader from "./ArtistHeader";

import ArtistAlbumList from "./ArtistAlbumList";

const ArtistPage = () => {
  const { artistId } = useParams();

  return (
    <div className="col-span-9 rounded-xl bg-[#121212] text-white h-screen overflow-y-auto ">
      <ArtistHeader artistId={artistId} />
      
      <div>
        <ArtistAlbumList title={"Album"} artistId={artistId} />
      </div>

      <ArtistTrackList title={"Popular"} artistId={artistId} />

      <ArtistList title={"Fans Also Like"} artistId={artistId} />
    </div>
  );
};

export default ArtistPage;
