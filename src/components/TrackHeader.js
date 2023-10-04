import React from 'react'
import { Link } from 'react-router-dom'

const TrackHeader = ({trackDetails}) => {

    const {album,artists, name } = trackDetails
  return (
    <div className="flex w-full bg-slate-600 p-4">
        <img className="w-1/3 h-1/3 " src={album?.images?.[0]?.url} alt="Poster" />
        <div className="my-auto h-2/3 w-2/3 px-2">
          <p>{album?.type}</p>
          <h1 className="font-extrabold md:text-5xl">{name }</h1>

          <div className="flex p-2">
            <Link to={"/artist/"+album?.artists?.[0]?.id}><p>{album?.artists?.[0]?.name} • </p></Link>
            <Link to={"/album/"+album?.id} key={album?.id}><p>{album?.name} • </p></Link>
          </div>
        </div>
      </div>
  )
}

export default TrackHeader