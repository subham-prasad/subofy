import React from "react";
import MusicCards from "./MusicCards";
import { Link } from "react-router-dom";

const MusicList = ({ title, musicAlbums }) => {
  // console.log(musicAlbums);
  return (
    <div className="m-3 p-4">
      <h1 className="font-bold text-2xl">{title}</h1>
      <div className="flex overflow-x-scroll">
        {musicAlbums &&
          musicAlbums.albums.items.map((item) => {
            return (
              <Link to={"/album/"+item?.id} key={item?.id}>
              <MusicCards album={item} />
              </Link>
            );
          })}
        {/* <MusicCards album={musicAlbums?.albums.items[0]} /> */}
      </div>
    </div>
  );
};

export default MusicList;
