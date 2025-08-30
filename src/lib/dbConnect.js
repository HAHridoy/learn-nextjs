import { MongoClient, ServerApiVersion } from "mongodb";

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(process.env.MONGODB_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default async function dbConnect(collectionName) {
  const client = await clientPromise;
  return client.db(process.env.DB_NAME).collection(collectionName);
}

