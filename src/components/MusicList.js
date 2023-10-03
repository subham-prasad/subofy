import React from "react";
import MusicCards from "./MusicCards";
import { Link } from "react-router-dom";

const MusicList = ({ title, musicAlbums }) => {

  if(!musicAlbums) return null

  return (
    <div className="m-3 p-4">
      <h1 className="font-bold text-2xl">{title}</h1>
      <div className="flex overflow-x-auto">
        {musicAlbums &&
          musicAlbums?.items?.map((item) => {
            return (
              <Link to={`/album/${item.id}`} key={item?.id}>
              <MusicCards album={item} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default MusicList;
