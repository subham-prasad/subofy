import React from "react";

const ArtistCards = ({ artist }) => {


  const { images, name, type } = artist;
  return (
    <div className=" bg-black w-52 rounded-xl p-2 m-2 hover:bg-[#272727]">
      <img
        className=" aspect-square rounded-full"
        src={images?.[0]?.url}
        alt="Artist"
      />
        <div className="py-8 px-2">
      <h1 className="font-bold text-xl">{name}</h1>
      <h3>{type}</h3>
      </div>
    </div>
  );
};

export default ArtistCards;
