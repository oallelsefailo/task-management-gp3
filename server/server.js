require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/submit_task");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/submit_task", router);

const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(process.env.MONGO_URI, dbOptions)
.then(()=> console.log('mongo connected'))
.catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
