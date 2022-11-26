import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

// db
import connectDB from "./db/connect.js";

import authRouter from "./router/auth.js";
import greetRouter from "./router/greet.js";

app.use("/v1/", [authRouter, greetRouter]);

const run = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`Connected on PORT: ${PORT}...`));
  } catch (error) {
    console.error(error);
  }
};

run();
