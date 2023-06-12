const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");

//middleware
app.use(express.static("./public"));
app.use(express.json());

 app.use(notFound)
app.use(errorHandlerMiddleware);

//routes

app.use("/api/v1/tasks", tasks);
const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONG0_URI);
    app.listen(port, console.log("server is listening on port 3000"));
  } catch (error) {
    console.log(error);
  }
};

start();
