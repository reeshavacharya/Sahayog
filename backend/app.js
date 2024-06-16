require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));

app.get("/api/ping", (req, res) => {
  return res.status(200).json({
    message: "All working good for now",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});


