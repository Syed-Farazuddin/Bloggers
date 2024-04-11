import mongoose from "mongoose";

mongoose.set("strictQuery", false);

export default function connectDB() {
  mongoose
    .connect("mongodb://localhost:27017/bloggers")
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((e) => {
      console.log(e);
    });
}
