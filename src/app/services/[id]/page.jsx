import React from 'react'

export default function ServicesDetails({params}) {
  const datas = [
  {
    "id": 1,
    "customer_name": "John Smith",
    "customer_service": "Website Development",
    "customer_details": "John requested a full-stack website using Next.js and Tailwind CSS."
  },
  {
    "id": 2,
    "customer_name": "Sophia Johnson",
    "customer_service": "SEO Optimization",
    "customer_details": "Sophia wanted complete SEO optimization for her online store."
  },
  {
    "id": 3,
    "customer_name": "Michael Brown",
    "customer_service": "App Development",
    "customer_details": "Michael needed a cross-platform mobile app for his startup."
  },
  {
    "id": 4,
    "customer_name": "Emily Davis",
    "customer_service": "UI/UX Design",
    "customer_details": "Emily asked for a modern UI/UX redesign for her business dashboard."
  }
]
    const id = params?.id;
    const singleData = datas.find(data => data.id == id)
    if(singleData){
      return (
    <div className=''>
        <h1>ServicesDetails</h1>
        <p>ID: {id}</p>
        <p>{singleData.customer_name}</p>
        <h3>{singleData.customer_service}</h3>
        <p>{singleData.customer_details}</p>
    </div>
  )
    }else{
      return(
        <p>Not Found</p>
      )
    }
  
}
