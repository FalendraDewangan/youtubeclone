import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { fetchData } from './fetchData';
import VideoContainer from './VideoContainer';

const PlayListDetail = () => {
    const {id} = useParams();

    const [result, setResult] = useState(null);
    const [playlist, setPlaylist] = useState(null);

    useEffect(()=>{
      fetchData(`/playlist/details/?id=${id}`).then(data=>setPlaylist(data)).catch((err)=>console.log("error in playlist details"))
        fetchData(`/playlist/videos/?id=${id}`).then(data=>{setResult(data)}).catch((err)=>{console.log("Error in PlayListDetail")});
        // eslint-disable-next-line
    },[])

  return (
      <div style={{marginTop:"8vh"}}>
      <h6 style={{textAlign:"center", color:"#FC1503"} }>{playlist && playlist.title}</h6>
      {result && <VideoContainer contents={result.contents} width="95vw"/>}
    </div>
  )
}

export default PlayListDetail
