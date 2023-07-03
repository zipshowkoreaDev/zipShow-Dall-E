import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);

  mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(() => console.log("MongoDB has connected. Happy Coding!"))
    .catch((err) => console.log(err));
}

export default connectDB;