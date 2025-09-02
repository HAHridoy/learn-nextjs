"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  try {
    // ✅ Await the collection
    const collection = await dbConnect(collectionNames.TEST_USER);

    // ✅ Insert document
    const result = await collection.insertOne(payload);

    return {
      success: true,
      insertedId: result.insertedId,
      message: "User registered successfully",
    };
  } catch (error) {
    console.error("Error inserting user:", error);
    return {
      success: false,
      message: error.message || "Failed to register user",
    };
  }
};
