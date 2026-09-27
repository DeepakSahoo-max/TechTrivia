import mongoose from "mongoose";

// Reads the connection string from the MONGO_URI environment variable.
// Copy backend/.env.example to backend/.env and fill in your own MongoDB
// Atlas (or local) connection string before running the server.
export const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.error(
      "MONGO_URI is not set. Create backend/.env from backend/.env.example and add your MongoDB connection string."
    );
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log("DB connected");
  } catch (err) {
    console.error("DB connection error:", err.message);
    process.exit(1);
  }
};
