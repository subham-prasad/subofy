import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useTrackDetails from "../hooks/useTrackDetails";
import TrackHeader from "./TrackHeader";
import ArtistTrackList from "./ArtistTrackList";
import ArtistAlbumList from "./ArtistAlbumList";
import ArtistList from "./ArtistList";

const TrackPage = () => {
  const { trackId } = useParams();

  useTrackDetails(trackId);

  const trackDetails = useSelector((store) => store.track.trackDetails);

  if (!trackDetails) return null;

  const { artists } = trackDetails;

  return (
    <div className="col-span-8 bg-[#121212] text-white rounded-xl m-1 h-screen overflow-y-scroll">
      <TrackHeader trackDetails={trackDetails} />
      <h1>Popular Tracks By</h1>
      <div>
        {artists.map((artist) => {
          return <ArtistTrackList title={artist?.name} artistId={artist?.id} />;
        })}
        {artists.map((artist) => {
          return (
            <ArtistAlbumList
              title={"Popular By " + artist?.name}
              artistId={artist?.id}
            />
          );
        })}
        <div>
          <h1>Fans Also Like</h1>
          <ArtistList  artistId={artists[0]?.id} />
        </div>
      </div>
    </div>
  );
};

export default TrackPage;
