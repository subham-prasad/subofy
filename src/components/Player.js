  import React, { useEffect } from "react";
  import { useSelector } from "react-redux";


  const Player = () => {

    const spotifyURI = useSelector(store => store.spotify.spotifyURI)

    if(!spotifyURI) return null
    

    const spotifyUriType = spotifyURI.split(':')[1]
    const spotifyUriId = spotifyURI.split(':')[2]
    
    return (
      <div className=" bg-[#121212] text-gray-600 m-2 rounded-xl py-10 flex justify-center h-2/5">

        <iframe className=" h-full"
          title="Spotify Embed"
          src={`https://open.spotify.com/embed/${spotifyUriType}/${spotifyUriId}?utm_source=generator&theme=0`}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    );
  };

  export default Player;
