import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import MusicList from "./MusicList";
import useNewReleaseAlbum from "../hooks/useNewReleaseAlbums";
import useFeaturedPlaylist from "../hooks/useFeaturedPlaylist";
import PlaylistList from "./PlaylistList";



const Home = () => {

  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);
  
  useNewReleaseAlbum();
  // useSeveralArtist();
  useFeaturedPlaylist()

  const albums = useSelector(store => store.spotify.newReleaseAlbums)
  const featuredPlaylist = useSelector(store => store.playlist.featuredPlaylist)

  // console.log(featuredPlaylist)
  if(!albums && !featuredPlaylist) return null

  return (
    <div >

     
      <MusicList title={"New Released Albums"} musicAlbums={albums?.albums}/>

      <PlaylistList title={featuredPlaylist?.message} playlists= {featuredPlaylist?.playlists} />
    </div>
  );
};

export default Home;
