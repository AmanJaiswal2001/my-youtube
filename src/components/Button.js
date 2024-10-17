import React from 'react'

function Button({name}) {
  return (
    <div>
        <button className='m-4 p-2 bg-slate-100 w-24 rounded-full'>{name}</button>
    </div>
  )
}

export default Button