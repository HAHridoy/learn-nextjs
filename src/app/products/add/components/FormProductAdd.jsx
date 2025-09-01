"use client";

import { useRouter } from "next/navigation";

export default function FormProductAdd() {
      const {NEXT_PUBLIC_BASE_URL} = process.env;
    const router = useRouter();
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const payload = { productName };
        const res = await fetch(`${NEXT_PUBLIC_BASE_URL}/api/items`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
    });
    const result = await res.json();
    console.log(result);
    form.reset();
    // alert("Product Added Successfully");
    router.push("/products");
}
  return (
    <div className="">
        <form onSubmit={handleSubmit}>
            <input type="text"  name ="productName" placeholder='Product Name'/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
    
}
