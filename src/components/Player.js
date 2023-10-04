  import React, { useEffect } from "react";
  import { useSelector } from "react-redux";


  const Player = () => {

    const spotifyURI = useSelector(store => store.spotify.spotifyURI)

    if(!spotifyURI) return null
    

    const spotifyUriType = spotifyURI.split(':')[1]
    const spotifyUriId = spotifyURI.split(':')[2]
    
    return (
      <div className=" h-full rounded-lg mx-5 overflow-y-hidden">

        <iframe className=" w-full "
          title="Spotify Embed"
          src={`https://open.spotify.com/embed/${spotifyUriType}/${spotifyUriId}?utm_source=generator&theme=0`}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    );
  };

  export default Player;
