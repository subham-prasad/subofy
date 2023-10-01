import React from "react";
import MusicCards from "./MusicCards";
import { Link } from "react-router-dom";
import useArtistAlbums from "../hooks/useArtistAlbums";
import { useSelector } from "react-redux";

const ArtistAlbumList = ({ title, artistId }) => {
  useArtistAlbums(artistId);
  const artistAlbums = useSelector((store) => store.artist.artistAlbums);
  if (!artistAlbums) return null;
  const { items } = artistAlbums;
  return (
    <div className="m-3 p-4">
      <h1 className="font-bold text-2xl">{title}</h1>
      <div className="flex overflow-x-scroll">
        {items?.map((item) => {
          return (
            <Link to={`/album/${item.id}`} key={item?.id}>
              <MusicCards album={item} />
            </Link>
          );
        })}
        {/* <MusicCards album={musicAlbums?.albums.items[0]} /> */}
      </div>
    </div>
  );
};

export default ArtistAlbumList;
