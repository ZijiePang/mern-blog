import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Label, TextInput, Button, Alert, Spinner } from 'flowbite-react'
import OAuth from '../components/OAuth';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent refreshing the page
    if (!formData.userName || !formData.email || !formData.password){
      return setErrorMessage('Please fill out all fields.');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success == false){
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok){
        navigate('/sign-in');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };
  return (
    <div className='min-h-screen mt-20'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-9" >
        {/* left */}
        <div className="flex-1">
          <Link to="/" className='whitespace-nowrap text-4xl font-bold dark:text-white'>
              <span className='px-2 py-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg text-white'>Mira's</span>
              Blog
          </Link>
          <p className='text-sm mt-5'>
            This is a place to share my notes and thoughts. Feel free to sign up and comment on my posts :)
          </p>
        </div>

        {/* right */}
        <div className="flex-1">
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Your Username'></Label>
              <TextInput type='text' placeholder='Username' id='userName' onChange={handleChange}></TextInput>
            </div>
            <div>
              <Label value='Your Email'></Label>
              <TextInput type='email' placeholder='name@company.com' id='email' onChange={handleChange}></TextInput>
            </div>
            <div>
              <Label value='Your Password'></Label>
              <TextInput type='password' placeholder='Password' id='password' onChange={handleChange}></TextInput>
            </div>
            <Button gradientDuoTone='purpleToBlue' type='submit' disabled={loading}>
              {
                loading ? (
                  <>
                  <Spinner size='sm'/>
                  <span className='pl-3'>Loading...</span>
                  </>
                ) : ('Sign Up')
              }
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>Sign In</Link>
          </div>
          {
            errorMessage && (
              <Alert className='mt-5' color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  )
}
