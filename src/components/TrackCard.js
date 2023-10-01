import React from "react";
import { Link } from "react-router-dom";

const TrackCard = ({ item }) => {
  const { name, artists, duration_ms, id,album } = item;



  if (!item) return null;

  return (
    <div className="m-2 p-2 hover:bg-[#1e1e1e] flex justify-between rounded-lg">
      <div className="flex">
        {album &&
      <img src={album?.images?.[0]?.url} alt="Poster" 
      className="w-10 mr-3"
      />
    }
      <div>
        <Link to={"/track/" + id} key={id} className="hover:underline">
          {name}
        </Link>

        <p>
          {Array.isArray(artists) &&
            artists?.map((artist) => {
              return (
                <span key={artist.id} className="hover:underline">
                  <Link to={`/artist/${artist.id}`}>{artist?.name + " "}</Link>
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
