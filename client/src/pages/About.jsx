import React from 'react'

export default function About() {
  return (
    <div>
      <div className="h-96">About</div>
      <div className="flex items-center justify-center h-96 bg-fixed bg-parallax bg-cover" style={{ backgroundImage: 'url("../src/assets/parallax.jpg")' }}>
        <h1 className="text-5xl text-white">Adventure</h1>
      </div>

      <div className="flex items-center justify-center h-96 bg-fixed bg-parallax bg-cover" style={{ backgroundImage: 'url("../src/assets/parallax6.jpg")' }}>
        <h1 className="text-5xl text-white">Life</h1>
      </div>
      <div className="flex items-center justify-center h-96 bg-fixed bg-parallax bg-cover" style={{ backgroundImage: 'url("../src/assets/parallax3.jpg")' }}>
        <h1 className="text-5xl text-white">Food</h1>
      </div>
      <div className="h-96">About</div>
    </div>
  )
}
