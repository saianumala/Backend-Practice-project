import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "../constants.js";

let names = ["sai", "kumar"];

async function DBConnect() {
  try {
    const dbconnection = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(`MondoDb connected securely: ${dbconnection.connection.host}`);
  } catch (error) {
    console.log("mongodb faied to connect: ", error);
    throw error;
  }
}

export { DBConnect };
