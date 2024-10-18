import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generate, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {

    const[livemessage,setlivemessage]=useState();
 const dispatch=useDispatch();

 const ChatMessages=useSelector((store)=>(store.chat.messages));
 useEffect(()=>{
   const i= setInterval(() => {
       //api polling 

       dispatch
       (addMessage({
        name:generate(),
        message:makeRandomMessage(10),
       }))
    }, 5000);

    return ()=>clearInterval(i);
 },[]);
 
 
 
 
 
 
    return (
        <>
    <div className='bg-slate-200 border rounded-lg border-black overflow-y-scroll flex  flex-col-reverse h-[600px] p-2'>
   {/* use map */}

  {ChatMessages.map((c,index)=>(
    <ChatMessage key={index} name={c.name} message={c.message}/>
  ))}
   {/* <ChatMessage name="Aman Jaiswal" message="Hello Youtube " />
    */}

    
    </div>
    <form  
    onSubmit={(e)=>
    {e.preventDefault();
    dispatch(addMessage({
        name:"aman",
        message:livemessage,

    })
    );
    setlivemessage("");
    
    }}

    className='w-68 border border-black m-2 p-2'>
        <input  value={livemessage}
        onChange={(e)=>setlivemessage(e.target.value)}
        className='border w-64 p-2 border-black' type='text'/>
        <button className=' px-2 mx-2 p-2 bg-green-200'>Send</button>
    </form>
    </>
  )
}

export default LiveChat