import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewReleaseAlbum } from "../utils/spotifySlice";

const useNEwReleaseAlbum = () =>{

    const accessToken = useSelector((store) => store.spotify.accessToken);
    const dispatch = useDispatch()
    useEffect(() => {
      if(accessToken) getNewReleaseAlbum();
    }, [accessToken]);
  
    const getNewReleaseAlbum = async () => {
      const data = await fetch(
        "https://api.spotify.com/v1/browse/new-releases?country=IN",
        {
          headers: {
            Authorization: "Bearer "+ accessToken,
          },
          method: "GET",
        }
      );
  
      const json = await data.json();

        
      dispatch(addNewReleaseAlbum(json))
        
  
  
    };
  
}

export default useNEwReleaseAlbum;