import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPlaylistItems } from "../utils/playlistSlice";

const usePlaylistItems = (playlistId) => {
  const accessToken = useSelector((store) => store.spotify.accessToken);

  const dispatch = useDispatch();
  useEffect(() => {
    getPlaylistItems();
  }, [accessToken,playlistId]);

  const getPlaylistItems = async () => {
    const data = await fetch(
      "https://api.spotify.com/v1/playlists/" + playlistId + "/tracks",
      {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
        method: "GET",
      }
    );
    const json = await data.json();
    dispatch(addPlaylistItems(json));
  };
};
export default usePlaylistItems;
