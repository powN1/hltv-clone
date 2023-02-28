import mongoose from "mongoose";

const mongoURI = process.env.MONGO_URI;

const connectMongo = async () => {
  mongoose.connect(mongoURI!);
  mongoose.connection
    .once("open", () => console.log("Connection to mongoDB established."))
    .on("error", (err) => console.log(`Error connecting to mongoDB ${err}`));
};

export default connectMongo;
