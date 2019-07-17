const express = require("express");
const router = express();

router.get("/", (req, res) => {
  console.log("went into the car");
  res.send("you are in the interior of the car");
});

router.get("/about", (req, res) => {
  console.log("following are the details of your car");
  res.send("you are in the interior of the car");
});

router.get("/engin", (req, res) => {
  console.log("following are the details of your car's engin ");
  res.send("you are here for the engine of the car");
});

// router.listen(3000, () => {
//   console.log("you are listining to the port 3000");
// });
module.exports = router;
