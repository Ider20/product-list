const express = require("express");
const port = 8080;
const app = express();
const { readProducts, createProducts, deleteProducts } = require("./file");
const cors = require("cors");

app.use(cors());
app.get("/", (req, res) => {
  res.send("Welcome page");
});

app.use(express.json());

// Reading products scene
app.get("/products", (req, res) => {
  const prod = readProducts();
  console.log(prod);
  res.send(prod);
});

// Adding product scene
app.post("/products", (req, res) => {
  const prod = req.body;
  createProducts(prod);
  res.status(201).send(prod);
});

// Updating product scene
app.put("/products/:id", (req, res) => {
  const id = req.params.id;
  console.log(id, "put delete");
  const updateProducts = req.body;
  console.log(updateProducts, "updateProducts");
  res.send("Update success");
});

//Deleting poduct scene
app.delete("/products/:id", (req, res) => {
  const prodId = req.params.id;
  // console.log(prodId, "prodId");
  deleteProducts(prodId);
  res.status(204).send(prodId);
});

app.listen(port, () => {
  console.log("server is running on http://localhost:" + port);
});
