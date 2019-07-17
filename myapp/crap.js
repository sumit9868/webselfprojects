const express = require("express");
const app = express();
const carParts = require("./app");

app.use("/car", carParts);
app.get("/", (req, res) => {
  console.log("you are outside of the car");
  res.send("you are out of the of the car");
});
app.listen(3000,()=>{
    console.log('you are listining to port 3000')
})