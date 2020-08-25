import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import mongoose from "mongoose";
import router from "./server/src/routes/index.js";
import path from 'path'

import cors from "cors";

dotenv.config();

(async () => {
  try {
    await mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
  }
})();

const PORT = process.env.PORT|| 5000;

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use("/api/v1", router);

let __dirname = path.resolve();

app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Pooling Unit Api Backend is listening to port ${PORT}`);
});
