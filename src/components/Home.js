import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import MusicList from "./MusicList";
import useNewReleaseAlbum from "../hooks/useNewReleaseAlbums";
import useFeaturedPlaylist from "../hooks/useFeaturedPlaylist";
import PlaylistList from "./PlaylistList";


const Home = () => {
  useNewReleaseAlbum();
  // useSeveralArtist();
  useFeaturedPlaylist()

  const albums = useSelector(store => store.spotify.newReleaseAlbums)
  const featuredPlaylist = useSelector(store => store.playlist.featuredPlaylist)

  console.log(featuredPlaylist)
  if(!albums && !featuredPlaylist) return null

  return (
    <div className="col-span-8 rounded-xl bg-[#121212] text-white">
      <MusicList title={"New Released Albums"} musicAlbums={albums?.albums}/>

      <PlaylistList title={featuredPlaylist.message} playlists= {featuredPlaylist.playlists} />
    </div>
  );
};

export default Home;
