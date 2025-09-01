import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// ✅ GET All Items
export async function GET() {
  try {
    const collection = await dbConnect("post");
    const data = await collection.find({}).toArray();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// ✅ POST Create New Item
export async function POST(req) {
  try {
    const postedData = await req.json();

    const collection = await dbConnect("post");
    const data = await collection.insertOne(postedData);

    // ✅ Revalidate the products page after insert
    revalidatePath("/products");

    return NextResponse.json(
      { message: "Item added successfully!", insertedId: data.insertedId },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
