import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./MERNroutes/user.js";

const app = express();

// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// must be put at very top of index.js
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});

app.get("/", (req, res) => {
  res.send("API is running!");
});
//use express middleware to connect this to our application
app.use("/users", userRoutes); //every route in the userRoutes will start with /users

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// mongoose
//   .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() =>
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
//   )
//   .catch((error) => console.log(error.message()));

// caused error
// mongoose.set('useFindAndModify', false)
