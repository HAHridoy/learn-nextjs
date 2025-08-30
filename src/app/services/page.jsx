import Link from 'next/link'
import React from 'react'

export default function ServicesPages() {
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

  return (
    <div>
        <p className='font-bold text-3xl'>ServicesPages</p>
        {
          datas.map(data =>
          {
            return(
              <div>
                <Link href = {`/services/${data.id}`}>
                <h1>{data.customer_name}</h1></Link>
              </div>
            )
          }
          )
        }
    </div>
  )
}
