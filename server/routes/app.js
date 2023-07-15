const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", function (req, res, next) {
  const pathName = path.join(
    __dirname,
    "../../dist/senior-project-time-clock/index.html"
  );
  res.sendFile(pathName);
});

module.exports = router;
