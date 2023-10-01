import React from "react";
import ArtistCards from "./ArtistCards";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useArtistRelatedArtists from "../hooks/useArtistRelatedArtists";



const ArtistList = ({ title, artistId }) => {
  useArtistRelatedArtists(artistId);

  const artistRelatedArtists = useSelector((store)=> store.artist.artistRelatedArtists)

  if(!artistRelatedArtists) return null

  const {artists} = artistRelatedArtists

  return (
    <div>
      <h1>{title}</h1>
      <div className="flex w-full overflow-x-scroll">
        {artists?.map((artist) => {
          return (
            <Link to={"/artist/" + artist.id} key={artist.id}>
              <ArtistCards artist={artist} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ArtistList;
