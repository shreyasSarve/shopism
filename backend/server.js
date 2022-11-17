const dontenv = require("dotenv").config;
const { application } = require("express");
const express = require("express");
const auth = require("./routes/auth");
const product = require("./routes/product");
const cart = require("./routes/cart");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(express.json());

app.use("/auth", auth);
app.use("/product", product);
app.use("/cart", cart);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
