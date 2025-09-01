import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// ✅ GET Single Item
export async function GET(req, { params }) {
  try {
    const id = params?.id;

    if (!id || !ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid or missing ID" }, { status: 400 });
    }

    const collection = await dbConnect("post");
    const singleData = await collection.findOne({ _id: new ObjectId(id) });

    if (!singleData) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    return NextResponse.json(singleData);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// ✅ DELETE Single Item
export async function DELETE(req, { params }) {
  try {
    const id = params?.id;

    if (!id || !ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid or missing ID" }, { status: 400 });
    }

    const collection = await dbConnect("post");
    const deletedData = await collection.deleteOne({ _id: new ObjectId(id) });

    return NextResponse.json(deletedData);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// ✅ PATCH (Update) Single Item
export async function PATCH(req, { params }) {
  try {
    const id = params?.id;

    if (!id || !ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid or missing ID" }, { status: 400 });
    }

    const updatedData = await req.json();
    const collection = await dbConnect("post");

    const filter = { _id: new ObjectId(id) };
    const updated = await collection.updateOne(filter, { $set: updatedData }, { upsert: true });

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
