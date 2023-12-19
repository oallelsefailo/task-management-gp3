require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const signUpRouter = require("./routes/SignupPage");
const submitTaskRouter = require("./routes/submit_task");
const submitAssignmentRouter = require("./routes/submit_assignment");
const connectDb = require("./config/database");
connectDb();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/submit_task", submitTaskRouter);
app.use("/submit_assignment", submitAssignmentRouter);
app.use("/SignupPage", signUpRouter);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
