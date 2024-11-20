// import { mongoose } from "mongoose";
// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";

// dotenv.config();

// const PORT = process.env.PORT || 5001;
// const dbURI = process.env.URL;

// export const app = express();
// app.use(cors());

// export const connection = mongoose
//   .connect(dbURI, {
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true,
//     // useCreateIndex: true,
//   })
//   .then((result) => {
//     const db = mongoose.connection;

//     const collection = db.collection("posts");
//     const changeStream = collection.watch();
//     changeStream.on("change", (change) => {
//       console.log("there is DB changes");
//     });
//     app.listen(PORT, function () {
//       console.log(`connection succesful ${PORT}`);
//     });
//   })
//   .catch((err) => console.log(err));
// // export default connection;

import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 5001;
const dbURI = process.env.URL;

export const app = express();
app.use(cors());

export const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log("MongoDB connected successfully");
    const db = mongoose.connection;
    const collection = db.collection("posts");
    // const changeStream = collection.watch();
    // changeStream.on("change", (change) => {
    //   console.log("There are DB changes");
    // });

    app.listen(PORT, function () {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

// Call the connection function
connectDB();

// Export the mongoose connection
export const connection = mongoose.connection;
