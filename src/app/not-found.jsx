import Link from 'next/link'
import React from 'react'

export default function NotFoundpage404() {
  return (
    <div className='flex justify-center items-center w-full h-full'>
        <h1>404 error</h1>
        <Link href="/">Go back to Home</Link>
    </div>
  )
}
