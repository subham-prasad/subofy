import React from "react";
import { Link } from "react-router-dom";
import { FormatDuration } from "../utils/helper";

const PlaylistItemsLong = ({ item }) => {
  if (!item) return null;
  const { track } = item;

  const { album, artists, name, duration_ms } = track;
  return (
    <div className="width-full h-20 rounded-lg my-3 hover:bg-[#454545] px-2  items-center grid grid-cols-12">
      <div className="px-5 flex items-center col-span-6">
        <div>
          <img
            className="h-10 mt-1"
            src={album?.images?.[0]?.url}
            alt="Poster"
          />
        </div>
        <div className="px-2">
          <Link
            to={"/track" + track.id}
            key={track.id}
            className="hover:underline"
          >
            {name}
          </Link>
          <div className="flex flex-wrap">
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
      <div className="flex-grow col-span-4">
        <Link
          to={"/album/" + album?.id}
          key={album?.id}
          className="hover:underline"
        >
          {album?.name}
        </Link>
      </div>
      <div></div>

      <div className="px-2 whitespace-nowrap text-white col-span-1">
        {FormatDuration(duration_ms)}
      </div>
    </div>
  );
};

export default PlaylistItemsLong;
