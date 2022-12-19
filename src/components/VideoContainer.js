import React from 'react'
import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'
import PlaylistCard from './PlaylistCard'
const VideoContainer = (props) => {
  return (
    <>
      <div className="videoContainer" style={{width:props.width}}>
      {
        props.contents.map(item=>{
          return (item.type==="video" && <VideoCard video={item.video} key={item.video.videoId}/>) || (item.type==="channel" && <ChannelCard channel={item.channel} key={item.channel.channelId} />) || (item.type==="playlist" && <PlaylistCard playlist={item.playlist} key={item.playlist.playlistId} />)
        })
      }
      </div>
    </>
  )
}

export default VideoContainer
