import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';

function Watch() {
 const[SeachParams]=useSearchParams();

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(closeMenu());
    },[]);
 
    return (
      <>
      <div className='flex flex-col'>
    <div className='p-5 flex '>
    <div>
<iframe width="1100" height="600" 
src={"https://www.youtube.com/embed/"+SeachParams.get("v") }
title="YouTube video player" 
frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
referrerpolicy="strict-origin-when-cross-origin" 
allowfullscreen></iframe>
</div>
<div className='w-96 mx-2 overflow-y-scroll'>
  <LiveChat/>
</div>
    </div>
    <CommentContainer/>
    </div>
    </>
  )
}

export default Watch