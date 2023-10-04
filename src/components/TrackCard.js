import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Play_IMG_CDN, Play_IMG_List_CDN } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addSpotifyURI } from "../utils/spotifySlice";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const TrackCard = ({ item, number }) => {
  const { name, artists, duration_ms, id, album } = item;

  const dispatch = useDispatch();
  const [hovered, setHovered] = useState(false);

  if (!item) return null;

  const setMusic = () => {
    dispatch(addSpotifyURI(item.uri));
  };

  const toggleHover = () => {
    setHovered(!hovered);
  };


  return (
    <div
      className={`m-2 p-2 group flex justify-between rounded-lg hover:bg-[#1e1e1e] ${
        hovered ? "cursor-pointer" : ""
      }`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div className="flex pr-2">
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

        {album && (
          <img

            src={album?.images?.[0]?.url}
            alt="Poster"
            className="w-10 mr-3 hidden md:block"
          />
        )}
        <div className="line-clamp-2">
          <Link to={"/track/" + id} key={id} className="hover:underline">
            {name}
          </Link>

          <p>
            {Array.isArray(artists) &&
              artists?.map((artist) => {
                return (
                  <span key={artist.id} className="hover:underline">
                    <Link to={`/artist/${artist.id}`}>
                      {artist?.name + " "}
                    </Link>
                  </span>
                );
              })}
          </p>
        </div>
      </div>
      <div>{(duration_ms / 1000 / 60).toFixed(2)} </div>
    </div>
  );
};

export default TrackCard;
