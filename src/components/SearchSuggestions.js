import React, { useState } from "react";
import { useSelector } from "react-redux";
import TrackList from "./TrackList";

import PlaylistList from "./PlaylistList";

import ArtistListBySearch from "./ArtistListBySearch";
import AlbumTrackList from "./AlbumTracksList";
import MusicList from "./MusicList";

const SearchSuggestions = () => {
  const searchResults = useSelector((store) => store.search.searchResults);
  const [activeButton, setActiveButton] = useState("All");
  const searchText = useSelector((state) => state.search.searchText);

  if (!searchResults || !searchResults[searchText]) return null;

  const { tracks, playlists, albums, artists } = searchResults[searchText];


  const buttonList = ["All", "Albums", "Playlists", "Artists", "Songs"];

  return (
    <div >
      <div className="mx-1 md:mx-5 px-2 md:px-4 text-lg" >
      {buttonList.map((item, index) => (
          <button
            key={index}
            className={`mr-2 ${
              activeButton === item ? "bg-white text-[#1e1e1e]" : "bg-[#1e1e1e] text-white"
            } rounded-2xl px-3 py-1 my-1`}
            onClick={() => setActiveButton(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {(activeButton === "All" || activeButton === "Albums") && <MusicList title={"Albums"} musicAlbums={albums} />}
      {(activeButton === "All" || activeButton === "Playlists") && <PlaylistList title={"Playlists"} playlists={playlists} />}
      {(activeButton === "All" || activeButton === "Artists") && (
        <ArtistListBySearch title={"Artists"} artists={artists?.items} />
      )}
      {(activeButton === "All" || activeButton === "Songs") && (
        <TrackList title={"Songs"} tracks={tracks?.items?.slice(0, 5)} />
      )}
    </div>
  );
};

export default SearchSuggestions;
