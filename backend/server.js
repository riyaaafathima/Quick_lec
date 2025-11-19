require("dotenv").config();

const express = require("express");
const connectDB=require('./src/config/db')
const notesRoutes = require("./src/routes/notesRoute");
const app = express();
const PORT = 5000;
const cors = require("cors");

app.use(express.json());

app.use(cors());

connectDB()

app.use("/api/notes",notesRoutes);

app.listen(PORT, () => {
  console.log(`server is on fire 🔥`);
});
