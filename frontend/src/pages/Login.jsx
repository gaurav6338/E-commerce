import React from 'react'
import { useState } from 'react';

const Login = () => {
  const [currentState,setCurrentState] = useState('login');
  const onSubmithandler = async(event) => {
    event.preventDefault();
  }

  return (
    <form className='flex flex-col items-center w-[90%] sm:max-w-90 m-auto mt-10 mb-30 gap-4 text-gray-700' onSubmit={onSubmithandler}>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>
      { currentState === 'Sign Up' && <input type="text" className='w-full px-3 border border-gray-400  py-2 placeholder:text-gray-500' placeholder='Name' required /> }
      <input type="email" className='w-full px-3 border border-gray-400  py-2 placeholder:text-gray-500' placeholder='Email' required />
      <input type="password" className='w-full px-3 border border-gray-400  py-2 placeholder:text-gray-500' placeholder='Password' required />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your password?</p>
        {currentState === 'login' ? <p className='cursor-pointer' onClick={()=>setCurrentState('Sign Up')}>Create account</p> : <p className='cursor-pointer' onClick={()=>setCurrentState('login')}>Already have an account?</p>}
      </div>
      <div>
        <button className='bg-black text-white px-16 py-3 rounded hover:bg-gray-900 transition ease-in-out duration-100'>{currentState === 'login' ? 'Sign In' : 'Sign Up'}</button>
      </div>
    </form>
  )
}

export default Login
