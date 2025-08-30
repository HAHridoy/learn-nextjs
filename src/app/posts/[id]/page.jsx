
export const getSinglePost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
}

// dynamic metadata
export async function generateMetadata({params}) {
  // read route params
  const { id } = await params
 
  // fetch data
  const post = await getSinglePost(id)
 
  return {
    title: post.title,
    description: post.body,
  }
}
 
export default async function SinglePost({params}) {
    const {id} =await params;
    const post = await getSinglePost(id);
  return (
    <div>
        <h1 className="text-green-300">{post.title}</h1>
        <p className="text-red-200">{post.body}</p>
    </div>
  )
}
