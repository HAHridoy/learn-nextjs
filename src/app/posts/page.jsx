import Link from "next/link";
import style from './post.module.css'

export const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return data;
}

export const metadata = {
  title: "All Posts",
  description: "Loading JSON Placeholder Posts using server components",
};

export default async function Posts() {
    const posts =await getPosts();
  return (
    <div className="space-y-8 grid grid-cols-4 gap-4 p-4">
        {
            posts.map(post => (
                <div key={post.id} className="p-4 border rounded shadow border-slate-300 bg-[#334EAC]">
                    <h2 className={`text-2xl font-bold ${style['title']}`}>{post.title}</h2>
                    <p className="testing-purpose-css-class font-semibold">{post.body}</p>
                    <div className="flex justify-center mt-4">
                        <Link href={`/posts/${post.id}`} className="text-blue-500">
                        <button className="bg-green-400 rounded-2xl p-4 text-black text-center">Read More</button>
                    </Link>
                    </div>
                </div>
            ))
        }
    </div>
  )
}
