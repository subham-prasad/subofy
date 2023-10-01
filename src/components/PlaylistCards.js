import React from 'react'

const PlaylistCards = ({item}) => {

    const {name, description, images} = item
  return (
    <div>
<div className="m-4 p-4 bg-gray-800 w-56 mx-2 rounded-xl h-80">
      <img className="w-30" src={images?.[0].url} alt="Album" />
      <h1 className="font-bold">{name}</h1>

      <p>{description}</p>
    </div>
    </div>
  )
}

export default PlaylistCards