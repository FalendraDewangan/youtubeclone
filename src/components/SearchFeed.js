import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { fetchData } from './fetchData';
import VideoContainer from './VideoContainer'

const SearchFeed = (props) => {
  const {query} = useParams();
  const [result, setResult] = useState(null);

  useEffect(()=>{
    fetchData(`/search/?q=${query}`).then(data=>{setResult(data)}).catch((err)=>{console.log("Error in SearchFeed")});
  },[query])

  return (
    <div style={{marginTop:"8vh"}}>
      <h6 style={{textAlign:"center", color:"#FC1503"} }>Showing result for '{query}'</h6>
      {result && <VideoContainer contents={result.contents} width="95vw" left="0vw" top="0vh"/>}
    </div>
  )
}

export default SearchFeed
