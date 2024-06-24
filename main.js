import express from "express";

const app = express();
const PORT = 6969;

app.get("/", (req, res) => {
  res.json({ msg: "hello World" });
});

//CURD Functionality

//R - for Reading
app.get("/movies", () => {});

//C - for Create
app.post("/movies", () => {});

//U - for Update
app.put("/movies", () => {});

//D - for Delete
app.put("/movies", () => {});

app.listen(PORT, () => {
  console.log(`The server running at http://localhost:${PORT}`);
});
