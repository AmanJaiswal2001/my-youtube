import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'
import { Outlet } from 'react-router-dom'

function Body() {
  return (
    <div className='flex gap-10'>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Body