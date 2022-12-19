import React, { useState } from 'react'
import { useParams } from 'react-router';
import { fetchData } from './fetchData';
import ReactPlayer from 'react-player';
import VideoContainer from './VideoContainer';

const VideoDetail = () => {
  const [relatedVideo, setRelatedVideos] = useState(null);
  // const [id, setId] = useState(useParams().id);
  let id = useParams().id;

  useState(()=>{
    console.log("videodetaill");
    fetchData(`/video/related-contents/?id=${id}`).then(data=>{setRelatedVideos(data)});
  },[]);

  return (
    <div style={{display:"flex", flexWrap:"wrap"}} >
      <div className="player">
        <ReactPlayer width='100%' url={`https://www.youtube.com/watch?v=${id}`} controls />
      </div>
      <div className style={{width:"90vw", margin:"auto"}}>
        <h2>Related Video : </h2>
        {relatedVideo && <VideoContainer contents={relatedVideo.contents} width="90vw"/>}
      </div>
    </div>
  )
}
// /video/details/?id=kJQP7kiw5Fk 
export default VideoDetail