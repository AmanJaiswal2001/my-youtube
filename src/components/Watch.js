import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

function Watch() {
 const[SeachParams]=useSearchParams();

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(closeMenu());
    },[]);
 
    return (
    <div className='px-5'>
<iframe width="1200" height="600" 
src={"https://www.youtube.com/embed/"+SeachParams.get("v") }
title="YouTube video player" 
frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
referrerpolicy="strict-origin-when-cross-origin" 
allowfullscreen></iframe>


    </div>
  )
}

export default Watch