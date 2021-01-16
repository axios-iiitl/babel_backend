const express = require("express");
const app = express();
const createError = require("http-errors");
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();
const { PORT } = process.env;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/api", require("./Routes/api"));

app.use(async (req, res, next) => {
    next(createError.NotFound("this route doesnot exist"));
  });

app.listen(PORT || 3000, () => {
  console.log(`Server started at port ${PORT || 3000} 🚀🚀`);
});
