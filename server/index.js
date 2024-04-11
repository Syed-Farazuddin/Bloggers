import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import connectDB from "./config/db.js";

import {
  invalidPathHandler,
  errorResponserHandler,
} from "./middleware/errorHandler.js";

import { userRoutes } from "./routes/userRoutes.js";
// app.use("/api/posts", postRoutes);
// app.use("/api/comments", commentRoutes);
// app.use("/api/post-categories", postCategoriesRoutes);
const app = express();

dotenv.config();
connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
// app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.use(invalidPathHandler);
app.use(errorResponserHandler);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
