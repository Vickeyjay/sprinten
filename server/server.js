require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");
const chatRoute = require("./chat module/route");
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());

connectDB();
app.use(cors());

app.use("/sprinten/chat", chatRoute)

app.listen(PORT, () => {
  console.log(`Server is listening ${PORT}`);
});
