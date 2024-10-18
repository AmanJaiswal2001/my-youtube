import React from 'react'




const commentData=()=>
    [
        {
        name:"Aman Jaiswal",
        text:"lorem5",
        replies:[

        ]
},
{
    name:"Aman Jaiswal",
    text:"lorem5",
    replies:[
        {
            name:"Aman Jaiswal",
            text:"lorem5",
            replies:[
        
            ]
        },

    ]
},
{
    name:"Aman Jaiswal",
    text:"lorem5",
    replies:[
        {
            name:"Aman Jaiswal",
            text:"lorem5",
            replies:[
        
            ]
        },
        {
            name:"Aman Jaiswal",
            text:"lorem5",
            replies:[
        
            ]
        },

    ]
},
{
    name:"Aman Jaiswal",
    text:"lorem5",
    replies:[
        {
            name:"Aman Jaiswal",
            text:"lorem5",
            replies:[
        
            ]
        },
        {
            name:"Aman Jaiswal",
            text:"lorem5",
            replies:[
        
            ]
        },
        {
            name:"Aman Jaiswal",
            text:"lorem5",
            replies:[
        
            ]
        },

    ]
},
    ];




const Comment=({data})=>{
   console.log(data);
     const{name,text,replies}=data;
   return<div className='flex'>
       <img 
       className='w-12 rounded-full'
src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"/>


<div className=' m-2'>
    <p className='font-bold'>{name}</p>
    <p>{text}</p>
    {/* <p>{replies}</p> */}
</div>


    </div>

};


const CommentList=({comments})=>{

    return  comments.map((comment,index)=>(
 <div key={index}>
 <Comment data={comment}/>
 <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comment.replies} />
      </div>

     </div>
    
        ))}
    




function CommentContainer() {
  return (
    <div className='m-5 p-3'>
    <h1 className='text-2xl font-bold'>Comment:</h1>
  

<CommentList comments={commentData()}/>

    {/* <Comment data={commentData()[0]}/> */}
    </div>
  )
}

export default CommentContainer