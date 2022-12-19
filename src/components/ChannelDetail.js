import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { fetchData } from './fetchData';
import VideoContainer from './VideoContainer'

const ChannelDetail = () => {
  let {id} = useParams();
  // let id = "UCJ5v_MCY6GNUBTO8-D3XoAg";
  
  const [channelResult, setChannelResult] = useState(null);
  const [channel, setChannel] = useState(null);

  useEffect(()=>{
    console.log("making request in ChannelDetail");
    fetchData(`/channel/details/?id=${id}`).then((data)=>{setChannel(data)}).catch((err)=>{console.log("Error in ChannelDetails")});
    fetchData(`/channel/videos/?id=${id}`).then((data)=>{setChannelResult(data)}).catch((err)=>{console.log("Error in ChannelDetail2")});

    // eslint-disable-next-lin

  },[])

  return (
    <div>
      <div className='channelContainer'>
        {channel && <div className="channel">
            <img src={channel.avatar[2].url} alt="" />
            <p style={{fontWeight:"bold"}}>{channel.title}</p>
            <p>{channel.stats.subscribersText}</p>
            <p>Joined on - {channel.joinedDate}</p>
        </div>}
      </div>
        {channelResult &&<VideoContainer contents={channelResult.contents} width="90vw" left="0vw"/>}      
    </div>
  )
}

export default ChannelDetail
