import React from 'react'
import img from '../assets/avatar.jpg'
export default function Home() {
  return (
    <div>
      {/* 
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-2" >
        left 
        <div className="flex-1 hidden sm:inline">
          <img src={img} style={{height:200, width:200}}></img>
        </div>


        <div className="flex-1">*/}

      <div class="column" className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to my blog</h1>
        <p className='text-gray-500 text-xs sm:txt-sm'>Here you'll find a variety 
              of articles and notes on topics such as computer science and market insights.</p>
        {/*<Link to='/search' className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'>View all posts</Link>*/}
      </div>
      
        
        
    </div>
  )
}
