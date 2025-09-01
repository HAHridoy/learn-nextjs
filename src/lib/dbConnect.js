import { MongoClient, ServerApiVersion } from "mongodb";

// ✅ Validate env variables
if (!process.env.MONGODB_URI) {
  throw new Error("❌ MONGODB_URI is not defined in environment variables");
}

if (!process.env.DB_NAME) {
  throw new Error("❌ DB_NAME is not defined in environment variables");
}

// ✅ Global cache for serverless environment
let cached = global._mongoClientCache;

if (!cached) {
  cached = global._mongoClientCache = { client: null, promise: null };
}

export default async function dbConnect(collectionName) {
  // ✅ Reuse existing connection if available
  if (!cached.promise) {
    const client = new MongoClient(process.env.MONGODB_URI, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    cached.promise = client.connect();
  }

  // ✅ Await the connection promise
  cached.client = await cached.promise;

  // ✅ Return the requested collection
  return cached.client.db(process.env.DB_NAME).collection(collectionName);
}
