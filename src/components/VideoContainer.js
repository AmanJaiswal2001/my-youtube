import React, { useEffect, useState } from 'react'
import { Youtube_video_API } from '../utils/constants';
import VideoCard from './VideoCard';
import Shimar from './Shimar';
import { Link } from 'react-router-dom';

function VideoContainer() {
 

    const [video,setVideos]=useState([]);
    useEffect(()=>{
        getVideo();
    },[])
 

    const getVideo= async()=>{

        const data=await fetch(Youtube_video_API);
        const json= await data.json();
       console.log(json);
setVideos(json.items);

    }
   
 
    return (
    <div className='grid grid-cols-4  gap-5  '>
 {/* multiple vide render */}
{
    video.map((video)=>(
        <Link to={"/watch?v=" +video.id}>
        <VideoCard key={video.id} info={video}/> 
        </Link>
    ))
}


    {/* one video render */}
{/* <VideoCard info={video[0]}/> */}




    </div>
  )
}

export default VideoContainer