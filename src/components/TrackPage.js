import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useTrackDetails from "../hooks/useTrackDetails";
import TrackHeader from "./TrackHeader";
import ArtistTrackList from "./ArtistTrackList";
import ArtistAlbumList from "./ArtistAlbumList";
import ArtistList from "./ArtistList";
import { addSpotifyURI } from "../utils/spotifySlice";
import { Play_IMG_CDN } from "../utils/constants";

const TrackPage = () => {
  const { trackId } = useParams();

  useTrackDetails(trackId);

  const trackDetails = useSelector((store) => store.track.trackDetails);
  const dispatch = useDispatch()
  if (!trackDetails) return null;

  
 

  const setMusic = () => {
    dispatch(addSpotifyURI(trackDetails.uri))
  }
  const { artists } = trackDetails;

  return (
    <div className="col-span-9 rounded-xl bg-[#121212] text-white h-screen overflow-y-scroll ">
      <TrackHeader trackDetails={trackDetails} />
      <div className="">
        <button onClick={setMusic} 
        className="w-20 h-20 my-2 cursor-pointer">
          <img className="cursor-pointer" alt="Play" src={Play_IMG_CDN} />
        </button>
      </div>
      <h1 className="font-bold text-2xl">Popular Tracks By: </h1>
      <div>
        {artists.map((artist) => {
          return (
            <ArtistTrackList
              title={artist?.name}
              artistId={artist?.id}
              key={artist?.id}
            />
          );
        })}
        {artists.map((artist) => {
          return (
            <ArtistAlbumList
              title={"Popular By " + artist?.name}
              artistId={artist?.id}
              key={artist?.id}
            />
          );
        })}
        <div>
          <h1 className="text-3xl font-bold">Fans Also Like</h1>
          <ArtistList artistId={artists[0]?.id} />
        </div>
      </div>
    </div>
  );
};

export default TrackPage;
