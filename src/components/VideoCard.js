import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = (props) => {
  return (
    <>
    <Link to={`/video/${props.video.videoId}`}>
    <div className="videoCard">
      <img src={props.video.thumbnails[0].url} alt="not found" />
      <p className="title">{props.video.title}</p>
      <div className='stats'>
        {props.video.author && <span>{props.video.author.title}</span>}
        {props.video.stats && <span>Views-{props.video.stats.views}</span>}
      </div>
    </div>
    </Link>
    </>
  )
}

export default VideoCard
