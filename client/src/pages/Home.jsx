import React from 'react'
import img from '../assets/avatar.png'
import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';


export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className='min-h-screen mt-20 mb-20'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center" >
        {/* left */}
        <div className="flex-1">
          <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
            <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to my blog</h1>
            <p className='text-gray-500 text-xs sm:txt-sm'>Hi, I'm Mira. Here you'll find a variety 
                  of articles and notes on topics such as computer science and market insights.</p>
          </div>
        </div>

        {/* right */}
        <div className="flex-1">
          <img src={img} className="hidden lg:inline" ></img>
        </div>
      </div>

      <div className='p-3 bg-gray-100 dark:bg-slate-700 mt-20'>
        <CallToAction />
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-blue-600 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>

  )
}
