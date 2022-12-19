import React, { useEffect, useState } from 'react'
import { fetchData } from './fetchData'
import Sidebar from './Sidebar'
import VideoContainer from './VideoContainer'

const Feed = () => {
  const [result, setResult] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("New");

  useEffect(()=>{
     fetchData(`/search/?q=${selectedCategory}`).then(data=>{setResult(data)});
     console.log(result);
     // eslint-disable-next-line
  },[selectedCategory])

  return (
    <>
        <div className="feed">
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <div className='feedVideoContainer'>
            {result && <VideoContainer contents={result.contents} width="82vw"/>}
        </div>
        </div>
    </>
  )
}

export default Feed
