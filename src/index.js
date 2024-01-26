import "dotenv/config";

// import dotenv from 'dotenv'

// dotenv.config({
//     path: '../env'
// })
import { DBConnect } from "./db/dbConnection.js";
import express from "express";
const app = express();

console.log(process.env);

DBConnect()
  .then(() => {
    app.listen(process.env.PORT) || 8000,
      () => {
        console.log("Mongo db connected");
      };
  })
  .catch((error) => console.log("Mongo db connection failed: ", error));
app.listen(process.env.PORT);
