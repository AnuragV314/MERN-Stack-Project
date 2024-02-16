const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute =  require("./routes/product.route.js")
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));




// api's
// app.get("/", (req, res) => {
//   res.send("hello from Node API");
// });

// routes
app.use("/api/products", productRoute);







//  connecting mongodb
mongoDbURL =
  "mongodb+srv://anurag:anurag0002@cluster0.hzoai4l.mongodb.net/NodeAPI?retryWrites=true&w=majority";
mongoose
  .connect(mongoDbURL)
  .then(() => {
    console.log("Connected!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

//  runing server
app.listen(3000, () => {
  console.log("server is running on the port 3000");
});
