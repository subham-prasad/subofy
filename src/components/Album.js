import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Album = () => {
  const { id } = useParams();
  const accessToken = useSelector((store) => store.spotify.accessToken);

  useEffect(() => {
    getAlbumDetails();
  }, []);

  const getAlbumDetails = async () => {
    const data = await fetch("https://api.spotify.com/v1/albums/" + id, {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
      method: "GET",
    });

    const json = await data.json();

    console.log(json);
  };

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default Album;
