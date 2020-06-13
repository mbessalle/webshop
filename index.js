const express = require("express");
const Customer = require("./models").customer;
const app = express();
const PORT = 4000;

app.get("/customers", async (req, res) => {
  const customer = await Customer.findAll();
  res.send(customer);
});

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));