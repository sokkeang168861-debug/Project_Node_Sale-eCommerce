import express from "express";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/hello", (req, res) => {
  res.send("Hello World!");
});
app.get("/world", (req, res) => {
  res.send("Hello World!1234");
});


export default app;
