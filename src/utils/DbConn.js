import mongoose from "mongoose";

const MONGODB_URL = "mongodb+srv://kuganoop2005:ArMJMDOH2kFjpDEU@clusterinit.uqqc9br.mongodb.net/?retryWrites=true&w=majority&appName=ClusterInit";

if (!MONGODB_URL) {
  throw new Error(
      "Please define the MONGODB_URL environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { con: null, promise: null };
}

const dbConnect = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  // If a connection does not exist, check if a promise is already in progress
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URL, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
