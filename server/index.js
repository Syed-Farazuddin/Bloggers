import express from "express";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./config/db";
import cors from "cors";

import {
  errorResponserHandler,
  invalidPathHandler,
} from "./middleware/errorHandler";

const app = express();

dotenv.config();
connectDB();

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.use(invalidPathHandler);
app.use(errorResponserHandler);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
