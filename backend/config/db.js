import mongoose from "mongoose";
import myConfig from "dotenv"
myConfig.config()

import colors from "colors"

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI, () =>
      console.log(
        `MongoDB Connected: ${process.env.MONGODB_URI}`.cyan.underline
      )
    );
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold);
    // Exit when connection failed
    process.exit(1);
  }
};

export default connectDB;
