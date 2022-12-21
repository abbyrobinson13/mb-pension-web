import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `MongoDB Connected: ${process.env.MONGODB_DBNAME}`.cyan.underline
    );
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold);
    // Exit when connection failed
    process.exit(1);
  }
};

export default connectDB;
