import express from "express";
import movieRouter from "./routes/movies.routes.js";
import connectDB from "./lib/db.js";
const app = express();
const PORT = 6969;

//Connect DB
connectDB();

app.get("/", (req, res) => {
  res.json({ msg: "hello World" });
});

//CURD Functionality
app.use("/movies", movieRouter);

app.listen(PORT, () => {
  console.log(`The server running at http://localhost:${PORT}`);
});
