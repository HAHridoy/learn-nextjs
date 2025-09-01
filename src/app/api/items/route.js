import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function GET() {
  try {
    const collection = await dbConnect("post");
    const data = await collection.find({}).toArray();

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  const postedData = await req.json();
  try {
    const collection = await dbConnect("post");
    const data = await collection.insertOne(postedData);
    revalidatePath("/products");
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}