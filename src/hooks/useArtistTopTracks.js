import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addArtistTopTracks, clearArtistData } from "../utils/artistSlice";
import { useParams } from "react-router-dom";

const useArtistTopTracks = (artistId) => {
  const accessToken = useSelector((store) => store.spotify.accessToken);


  const dispatch = useDispatch();


  useEffect(() => {
    getArtistTopTracks();


  }, [accessToken,artistId]);

  const getArtistTopTracks = async () => {
    const data = await fetch(
      "https://api.spotify.com/v1/artists/" +
        artistId +
        "/top-tracks?market=IN",
      {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
        method: "GET",
      }
    );
    const json = await data.json();
    dispatch(addArtistTopTracks(json));

  };
};

export default useArtistTopTracks;
