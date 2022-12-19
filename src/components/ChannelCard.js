import React from 'react'
import { Link } from 'react-router-dom'

const ChannelCard = (props) => {
  return (
    <>
    <Link to={`/channel/${props.channel.channelId}`}>
      <div className='videoCard channelCard'>
        <img src={props.channel.avatar[0].url} alt="" />
        <p>{props.channel.title}</p>
        <div className="stats">
          <p style={{textAlign:"center", width:"100%", fontSize:"10px"}}>Subscribers - {props.channel.stats.subscribersText}</p>
        </div>
      </div>
    </Link>
    </>
  )
}

export default ChannelCard
