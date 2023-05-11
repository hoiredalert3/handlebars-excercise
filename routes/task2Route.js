const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  let figures = {
    nec: 0,
    ffa: 0,
    give: 0,
    edu: 0,
    saving: 0,
    play: 0,
  };
  if (req.query.salary) {
    figures = {
      nec: Math.round(0.55 * req.query.salary),
      ffa: Math.round(0.1 * req.query.salary),
      give: Math.round(0.05 * req.query.salary),
      edu: Math.round(0.1 * req.query.salary),
      saving: Math.round(0.1 * req.query.salary),
      play: Math.round(0.1 * req.query.salary),
    };
    res.render("task2", { figures: figures });
  } else {
    res.render("task2", { figures: figures });
  }
});

module.exports = router;
