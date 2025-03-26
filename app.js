require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const taskRouter = require("./routes/task");
const connectDB = require("./db/connect");
const notFoundMiddleware = require("./middleware/not-found");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).send(`<h1>Hello There!</h1>
    <a href = http://localhost:${PORT}/api/v1/tasks> Click here to get all tasks </a> `);
});

app.use("/api/v1/tasks", taskRouter);
app.use(notFoundMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Database Connected Successfully");
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
