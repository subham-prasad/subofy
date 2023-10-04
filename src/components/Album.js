import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import AlbumHeader from "./AlbumHeader";

import AlbumTrackList from "./AlbumTracksList";
import ArtistAlbumList from "./ArtistAlbumList";
import { Play_IMG_CDN } from "../utils/constants";
import { addSpotifyURI } from "../utils/spotifySlice";

const Album = () => {
  const { id } = useParams();

  const albumDetails = useSelector((store) => store.spotify.albumDetails);

  const dispatch = useDispatch()
 

  const setMusic = () => {
    dispatch(addSpotifyURI(albumDetails.uri))
  }

  return (
    <div >
      <AlbumHeader albumId={id} />
      <hr />
      <div className="">
        <button onClick={setMusic} 
        className="w-20 h-20 my-2 cursor-pointer">
          <img className="cursor-pointer" alt="Play" src={Play_IMG_CDN} />
        </button>
      </div>
      <AlbumTrackList albumId={id} />

      <ArtistAlbumList
        title={"More By" + albumDetails?.artists?.[0]?.name}
        artistId={albumDetails?.artists?.[0]?.id}
      />

    </div>
  );
};

export default Album;
