import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import MusicList from "./MusicList";
import useNewReleaseAlbum from "../hooks/useNewReleaseAlbums";
import useSeveralArtist from "../hooks/useSeveralArtist";

const Home = () => {
  useNewReleaseAlbum();
  // useSeveralArtist();

  const albums = useSelector(store => store.spotify.newReleaseAlbums)

  if(!albums) return null

  return (
    <div className=" col-span-8 rounded-xl bg-[#121212] text-white">
      <MusicList title={"New Released Albums"} musicAlbums={albums}/>
    </div>
  );
};

export default Home;
