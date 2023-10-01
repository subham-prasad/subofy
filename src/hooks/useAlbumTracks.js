import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addAlbumTracks } from "../utils/spotifySlice";

const useAlbumTracks = (id) => {
  const accessToken = useSelector((store) => store.spotify.accessToken);

  const dispatch = useDispatch();

  useEffect(() => {
    accessToken && getAlbumTracks();
  }, [accessToken, id]);

  const getAlbumTracks = async () => {
    const data = await fetch(
      "https://api.spotify.com/v1/albums/" + id + "/tracks",
      {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
        method: "GET",
      }
    );
    const json = await data.json();
    dispatch(addAlbumTracks(json));
    console.log(json);
  };
};

export default useAlbumTracks;
