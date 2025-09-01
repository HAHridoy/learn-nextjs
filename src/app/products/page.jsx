import { redirect } from 'next/navigation';
import React from 'react'

export default async function Products() {
    const res = await fetch("http://localhost:3000/api/items", {cache: "force-cache"});
    const datas = await res.json();

    if(datas.length>3){
      redirect("/");
    }
  return (
    <ul>
        {
            datas?.map(data => {
                return <li key={data._id}>{data?.productName}</li>
            }
        )}
    </ul>
  )
}
