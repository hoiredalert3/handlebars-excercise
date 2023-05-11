const express = require("express");
const router = express.Router();
const { zodiacs } = require("../data");

router.get("/:zodiacName", (req, res) => {
  let zodiacName = req.params.zodiacName;
  let selectedZodiac = zodiacs.filter((item) => item.name == zodiacName);

  console.log(req.params);

  let zodiac = zodiacs[0];

  if (selectedZodiac.length) {
    zodiac = selectedZodiac[0];
  }

  console.log(zodiac);

  res.render("task4Details", { zodiac });
});

module.exports = router;
