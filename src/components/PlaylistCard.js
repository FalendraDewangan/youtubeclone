import React from 'react'
import { Link } from 'react-router-dom'

const PlaylistCard = (props) => {
  return (
    <Link to={`/playlist/${props.playlist.playlistId}`}>
    <div className="videoCard">
      <img src={props.playlist.thumbnails[0].url} alt="not found" />
      <p className="title">{props.playlist.title}</p>
    </div>
    </Link>
  )
}

export default PlaylistCard