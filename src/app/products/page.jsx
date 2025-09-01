import { redirect } from 'next/navigation';
import React from 'react'

export const dynamic = "force-dynamic";
export default async function Products() {
  const{NEXT_PUBLIC_BASE_URL} = process.env;
    const res = await fetch(`${NEXT_PUBLIC_BASE_URL}/api/items`, { cache: "no-store" });
    const datas = await res.json();

    // if(datas.length>3){
    //   redirect("/");
    // }
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
