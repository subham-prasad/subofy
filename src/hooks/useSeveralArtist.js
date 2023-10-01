import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewReleaseAlbum, addSeveralArtist } from "../utils/spotifySlice";

const useSeveralArtist = () =>{

    const accessToken = useSelector((store) => store.spotify.accessToken);
    const dispatch = useDispatch()
    useEffect(() => {
      if(accessToken) getSeveralArtist();
    }, [accessToken]);
  
    const getSeveralArtist = async () => {
      const data = await fetch(
        "https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6",
        {
          headers: {
            Authorization: "Bearer "+ accessToken,
          },
          method: "GET",
        }
      );
  
      const json = await data.json();

        
      dispatch(addSeveralArtist(json))
        
  
  
    };
  
}

export default useSeveralArtist;