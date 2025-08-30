"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function AboutPages() {

  const router = useRouter();
  const isloggedin = false;
  const handleNavigation = () =>{
    if(isloggedin){
      router.push('/about/address')
    }
    else{
      router.push('/')
    }
  }
  return (
    <div>
        <p className='font-bold text-3xl'>AboutPages</p>
        <p>
          <Link href='/about/address'>Address</Link>
        </p>
        <button type='button' onClick={handleNavigation}>Addaress pagu</button>
    </div>
  )
}
