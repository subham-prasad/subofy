import React, { useEffect} from "react";
import { client_id, client_secret } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addAccessToken } from "../utils/spotifySlice";

const useSpotify = () => {

  const accessToken = useSelector(store => store.spotify.accessToken)

  const dispatch = useDispatch();
  const getAccessToken = async () => {
    const data = await fetch("https://accounts.spotify.com/api/token", {
      headers: {
        Authorization: "Basic " + btoa(client_id + ":" + client_secret),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
      method: "POST",
      json: true,
    });

    if (data.ok) {
      const json = await data.json();

      dispatch(addAccessToken(json.access_token));
    } else {
      console.error("Error: ", data?.status, data?.statusText);
    }
  };
  

  useEffect(() => {
    !accessToken &&  getAccessToken();
  }, [accessToken]);
};
export default useSpotify;


