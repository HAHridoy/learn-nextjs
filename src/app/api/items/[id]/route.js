import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
    
        const p = await params;
    
    try {
        const collection = await dbConnect("post");
        const singleData = await collection.findOne({ _id: new ObjectId(p.id)});
    
        return Response.json(singleData);
      } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
      }
}

export async function DELETE(req, { params }) {
    const p = await params;
    try{
      const collection = await dbConnect("post");
      const deletedData = await collection.deleteOne({ _id: new ObjectId(p.id)});
      return Response.json(deletedData);
    } catch (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

 
}

export async function PATCH(req, { params }) {
    const p = await params;
    try{
      const updatedData = await req.json();
      const collection = await dbConnect("post");
      const filter = { _id: new ObjectId(p.id) };
      const updated = await collection.updateOne(filter, { $set:{...updatedData}}, { upsert: true });
      return Response.json(updated);
    } catch (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }
}