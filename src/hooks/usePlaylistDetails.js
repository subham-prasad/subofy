import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPlaylistDetails } from "../utils/playlistSlice";

const usePlaylistDetails = ( playlistId ) => {
  const accessToken = useSelector((store) => store.spotify.accessToken);
  const dispatch = useDispatch();

  // console.log(playlistId)

  useEffect(() => {
    getPlaylistDetails();
  }, [accessToken,playlistId]);

  const getPlaylistDetails = async () => {
    const data = await fetch(
      "https://api.spotify.com/v1/playlists/"+playlistId,
      {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
        method: "GET",
      }
    );

    const json = await data.json();
    // console.log(json);
    dispatch(addPlaylistDetails(json));
  };
};

export default usePlaylistDetails;
