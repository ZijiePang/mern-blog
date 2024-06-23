import React from 'react'
import img from '../assets/avatar.png'
export default function Home() {
  return (
    <div className='min-h-screen mt-20'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center" >
        {/* left */}
        <div className="flex-1">
          <div class="column" className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
            <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to my blog</h1>
            <p className='text-gray-500 text-xs sm:txt-sm'>Hi, I'm Mira. Here you'll find a variety 
                  of articles and notes on topics such as computer science and market insights.</p>
          </div>
        </div>

        {/* right */}
        <div className="flex-1">
          <img src={img} ></img>
        </div>
      </div>
    </div>

  )
}
