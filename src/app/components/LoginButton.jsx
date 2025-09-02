'use client'
import React from 'react'
import { signIn } from 'next-auth/react'

export default function LoginButton() {
  return (
    <div>
        <button className='bg-gray-300 p-2 rounded text-black' onClick={() =>signIn()}>Login</button>
    </div>
  )
}
