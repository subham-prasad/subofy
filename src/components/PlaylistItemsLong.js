import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormatDuration } from "../utils/helper";
import { useDispatch } from "react-redux";
import { addSpotifyURI } from "../utils/spotifySlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const PlaylistItemsLong = ({ item, number }) => {
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();
  if (!item) return null;
  
  const { track } = item;

  
  const toggleHover = () => {
    setHovered(!hovered);
  };


  const { album, artists, name, duration_ms } = track;
  const setMusic = () => {
    dispatch(addSpotifyURI(track.uri));
  };


  return (
    <div className="width-full h-20 rounded-lg my-3 hover:bg-[#454545] px-2  items-center grid grid-cols-12 "
    onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}>
      <div className="px-5 flex items-center col-span-6">
      {hovered ? (
          <button
            onClick={setMusic}
            className="  opacity-100 transition-opacity"
          >

            <FontAwesomeIcon icon={faPlay}  className="mr-2 pr-2 text-white" />
          </button>
        ) : (
          <div className="pr-2 mr-2 text-gray-400">{number}</div>
        )}
        <div>
          <img
            className="h-10 mt-1 hidden md:block"
            src={album?.images?.[0]?.url}
            alt="Poster"
          />
        </div>
        <div className="px-2 line-clamp-1">
          <Link
            to={"/track/" + track.id}
            key={track.id}
            className="hover:underline"
          >
            {name}
          </Link>
          <div className="flex flex-wrap ">
            {artists &&
              artists?.map((artist) => {
                return (
                  <Link
                    to={"/artist/" + artist?.id}
                    key={artist?.id}
                    className="hover:underline"
                  >
                    {artist?.name} &nbsp;
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
      <div className="flex-grow col-span-4 line-clamp-1">
        <Link
          to={"/album/" + album?.id}
          key={album?.id}
          className="hover:underline"
        >
          {album?.name}
        </Link>
      </div>
      <div></div>

      <div className="px-1 whitespace-nowrap text-white col-span-1">
        {FormatDuration(duration_ms)}
      </div>
    </div>
  );
};

export default PlaylistItemsLong;
