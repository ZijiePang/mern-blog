import React from 'react';
import { Link } from 'react-router-dom';
import { Label, TextInput, Button } from 'flowbite-react'
export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5" >
        {/* left */}
        <div className="flex-1">
          <Link to="/" className='whitespace-nowrap text-4xl font-bold dark:text-white'>
              <span className='px-2 py-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg text-white'>Mira's</span>
              Blog
          </Link>
          <p className='text-sm mt-5'>
            This is my blog. Feel free to sign up and comment my posts :)
          </p>
        </div>

        {/* right */}
        <div className="flex-1">
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Your Username'></Label>
              <TextInput type='text' placeholder='Username' id='username'></TextInput>
            </div>
            <div>
              <Label value='Your Email'></Label>
              <TextInput type='text' placeholder='name@company.com' id='email'></TextInput>
            </div>
            <div>
              <Label value='Your Password'></Label>
              <TextInput type='text' placeholder='Password' id='password'></TextInput>
            </div>
            <Button gradientDuoTone='purpleToBlue' type='submit'>Sign Up</Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
