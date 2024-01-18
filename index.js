const express = require("express");
const port = 8080;
const app = express();
const { readProducts, createProducts } = require("./file");
const cors = require("cors");

app.use(cors());
app.get("/", (req, res) => {
  res.send("Welcome page");
});

app.use(express.json());

app.get("/products", (req, res) => {
  const prod = readProducts();
  console.log(prod);
  res.send(prod);
});

app.post("/products", (req, res) => {
  const prod = req.body;
  createProducts(prod);
  res.status(201).send(prod);
});

app.put("/products/:id", (req, res) => {
  const id = req.params.id;
  const updateProducts = req.body;
  res.send("update success");
});

app.listen(port, () => {
  console.log("server is running on http://localhost:" + port);
});
