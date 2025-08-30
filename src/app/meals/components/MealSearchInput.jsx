"use client"
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function MealSearchInput() {

    
    const [search, setSearch] = useState("");   
    const router = useRouter();
    const pathname = usePathname();
    useEffect(()=>{
        const searchQuery= {search}
        const urlQueryParam = new URLSearchParams(searchQuery);
        const url = `${pathname}?${urlQueryParam}`;
        router.push(url);
    }, [search]);
  return (
    <div>
        
            <input type="text" placeholder="Search Meals" className=" border border-slate-300 rounded p-2 my-1.5" 
            value={search} onChange={(e) => setSearch(e.target.value)} /> 
    </div>
  )
}
