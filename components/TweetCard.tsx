import {useState} from 'react'
export const TweetCard = () => {
    const [tweet,setTweet]=useState('')

    function handleTweet(){
        console.log(tweet)
    }
  return (
    <div className="w-2/6 h-60 bg-gray-100 p-1 flex flex-col gap-2 rounded-lg">
       
        <textarea maxLength={150}
        onChange={(e)=>setTweet(e.target.value)} value={tweet}
         placeholder="What's up ?" className=" text-slate-600 resize-none h-3/5 border-none outline-none p-2"/>
        <hr></hr>
        <div className="flex w-full   items-center mt-2 p-2 gap-4 justify-between ">
           <div className="flex justify-around w-3/5 px-4 py-2  items-center rounded-3xl text-sm bg-white text-slate-400">
            <p>cc</p>
            <p>cc</p>
            <p>cc</p>
          
           </div>
           <div className='flex  gap-4 items-center'>
            <small className='text-gray-500 text-sm'>{tweet.length>0? 150 - tweet.length : ''}</small>
            <button  onClick={handleTweet}
            className="bg-blue-400 text-slate-50 p-2 rounded-3xl px-4  text-sm font-semibold ml-auto ">tweeter</button>
            </div>
        </div>
    </div>
  )
}