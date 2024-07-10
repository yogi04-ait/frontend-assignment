import React from 'react'
import { useState } from 'react'
import Login from './Login'
import Signup from './Signup'

const Accountaccess = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const setSign = () => { setIsSignIn(!isSignIn) }
  return (
    <div className='flex m-auto w-full justify-center h-screen ' >
      <div className="absolute ">
        <img
          className='w-screen h-screen'
          src='https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt="background-image"
        />
      </div>
      {isSignIn ? <Login setSign={setSign} /> : <Signup setSign={setSign} />}
    </div>
  )
}

export default Accountaccess