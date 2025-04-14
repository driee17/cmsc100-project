import express from "express"; // for using express.js
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(bodyParser.json());
app.use(cors());
//connect to mongodb
await mongoose
  .connect("mongodb://127.0.0.1:27017/project", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(3001, () => {
      console.log("Server connected to port 3001 and MongoDB");
    });
  })
  .catch((error) => {
    console.log("Unable to connect to server and/or Mongodb", error);
  });
// for post function
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

import router from "./router.js"; // import the router function
router(app);