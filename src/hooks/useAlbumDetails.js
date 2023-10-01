import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAlbumDetails } from "../utils/spotifySlice";

const useAlbumDetails = (id) => {
  const accessToken = useSelector((store) => store.spotify.accessToken);

  const dispatch = useDispatch(); 

  useEffect(() => {
    accessToken && getAlbumDetails();
  }, [accessToken]);

  const getAlbumDetails = async () => {
    const data = await fetch("https://api.spotify.com/v1/albums/" + id, {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
      method: "GET",
    });

    const json = await data.json();
    
    dispatch(addAlbumDetails(json));
  };
};

export default useAlbumDetails;
