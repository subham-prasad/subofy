import React from 'react'
import { Link } from 'react-router-dom'

const TrackHeader = ({trackDetails}) => {

    const {album,artists, name } = trackDetails
  return (
    <div className="flex mt-6 rounded-lg mx-2 h-80 bg-slate-600 pt-4">
        <img className="w-72 h-72 px-4 " src={album?.images?.[0]?.url} alt="Poster" />
        <div className="my-auto">
          <p>{album?.type}</p>
          <h1 className="font-extrabold text-5xl">{name }</h1>

          <div className="flex p-2">
            <Link to={"/artist/"+album?.artists?.[0]?.id}><p>{album?.artists?.[0]?.name} • </p></Link>
            <Link to={"/album/"+album?.id} key={album?.id}><p>{album?.name} • </p></Link>
          </div>
        </div>
      </div>
  )
}

export default TrackHeader