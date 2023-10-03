import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrackDetails } from "../utils/trackSlice";

const useTrackDetails = (trackId) => {
  const dispatch = useDispatch();

  const accessToken = useSelector((store) => store.spotify.accessToken);

  useEffect(() => {
    accessToken && getTrackDetails();
  }, [accessToken,trackId]);

  const getTrackDetails = async () => {
    const data = await fetch(
      "https://api.spotify.com/v1/tracks/"+trackId+"?market=IN",
      {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
        method: "GET",
      }
    );

    const json = await data.json();
    dispatch(addTrackDetails(json));
  };
};

export default useTrackDetails;
