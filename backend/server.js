import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
const PORT = 5000;
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// MONGODB SETUP
dotenv.config();
async function main() {
  

  await mongoose.connect(
    process.env.MONGODB_URI,

    {
      dbName: process.env.MONGODB_DBNAME,

      user: process.env.MONGODB_USER,

      pass: process.env.MONGODB_PASSWORD,
    }
  );
  console.log(`Connected to Database :  ${process.env.MONGODB_DBNAME}`)
}

main().catch((err) => console.log(err));