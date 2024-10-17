import React from 'react'
import Main from './Main'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar=()=> {
 const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)
 
 if(!isMenuOpen) return null;
    
 return (
    <div className='w-48 shadow-lg p-3'>
       <div>
       <ul>
            <li>
            <Link>Home</Link>
                {/* <div>Home</div> */}
                <div>Shorts</div>
                <div>Video</div>
                <div>Live</div>
                
            </li>
        </ul>

        <h1 className='font-bold text-xl'>Subcription</h1>
        <ul>
            <li>
                <div>Music</div>
                <div>Sport</div>
                <div>Gaming</div>
                <div>Movie</div>
                
            </li>
        </ul>
        <h1 className='font-bold text-xl'>WatchLater</h1>
        <ul>
            <li>
                <div>Music</div>
                <div>Sport</div>
                <div>Gaming</div>
                <div>Movie</div>
                
            </li>
        </ul>
        <h1 className='font-bold text-xl'>Explore</h1>
        <ul>
            <li>
                <div>Treding</div>
                <div>Shopping</div>
                <div>Music</div>
                <div>Movie</div>
                <div>Live</div>
                <div>Gaming</div>
                <div>News</div>
                <div>Sports</div>
                <div>Courses</div>
                <div>Fashion&Beauty</div>
                <div>Podcasts</div>                
            </li>
        </ul>
        
       </div>
    </div>
  )
}

export default Sidebar