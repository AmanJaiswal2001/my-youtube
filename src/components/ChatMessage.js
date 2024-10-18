import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center mt-2'>
         <img 
       className='w-8 rounded-full'
src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"/>

<span className='font-bold px-2'>{name}</span>
<span className='text-sm'>{message}</span>
    </div>
  )
}

export default ChatMessage