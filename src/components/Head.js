import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { json, Link, Navigate } from 'react-router-dom';
import { YOUTUBE_SUGG_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

function Head() {
const[searchQuery,setSearchQuery]=useState("");
const[suggetion,setSuggetion]=useState([]);
const[showSuggetion,setShowSuggetion]=useState(false);

const searchCache=useSelector((store)=>store.search)
const dispatch =useDispatch();


//learn
useEffect(()=>{
    const timer=setTimeout(()=>{
        if(searchCache[searchQuery]){
            setSuggetion(searchCache[searchQuery])
        }
        else{
        
        getSearchSuggetion();
        
        }
    },200);
    return()=>{
        clearTimeout(timer);
    }

},[searchQuery])

//learn//

const getSearchSuggetion= async()=>{
    const data=await fetch(YOUTUBE_SUGG_API+searchQuery);
    const json= await data.json();
    // console.log(json[1]);
    setSuggetion(json[1]);


//update cache
dispatch(
    cacheResults({
        [searchQuery]:json[1],
    })
);
};
   
const toggleHandler=()=>{
    dispatch(toggleMenu());
}


  return (
    <div className='grid grid-flow-col mt-3  p-2 shadow-lg justify-between'>
<div className='flex col-span-1 '>
    <img 
    onClick={()=>toggleHandler()}
    className='h-12 cursor-pointer' alt="toggle"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxc2LWlID-hBBxalb5ii0QwLJx6ET19luzcw&s">

    </img>
    <a href='/'>
    <img className='h-12' alt="logo"
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvzJIPzaMYDI9icTkuCEaF0wlI0gKZaIwlcg&s'/>
</a>
</div>
<div className='col-span-10 px-10 space-y-1'>
   <div>
    <input type='text' 
    className='  outline-none w-96 p-2 bg-slate-50 rounded-l-full'
     placeholder='Seach'
        value={searchQuery}
        onChange={(e)=>(setSearchQuery(e.target.value))}
     onFocus={()=>setShowSuggetion(true)}
     onBlur={()=>setShowSuggetion(false)}


     />
    <button className='bg-gray-300 w-16 p-2 rounded-r-full'><i class="fa-solid fa-magnifying-glass"></i></button>
</div>
{showSuggetion&&(
<div className='fixed  bg-slate-50 w-96 rounded-lg shadow-lg p-3  border border-gray-100'>
    <ul className=''>
    {suggetion.map((s)=>(
    
    <li key={s} className='  px-2 py-2  hover:bg-slate-200'><i className="fa-solid fa-magnifying-glass "></i>{s}
    </li>
   ))}
       
    </ul>
</div>
)}
</div>

<div className='mr-5 col-span-1 '>
    <img
    className='w-12 rounded-full'
     src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"/>
</div>

    </div>
  )
}

export default Head