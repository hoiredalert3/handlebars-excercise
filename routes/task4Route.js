const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("task4");
});

module.exports = router;
