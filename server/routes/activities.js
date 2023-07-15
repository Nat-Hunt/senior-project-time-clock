const express = require("express");
const Activity = require("../models/activity");

const router = express.Router();

router.get("/", (req, res, next) => {
  Activity.find()
    .then((data) => {
      res.send(200).json({
        message: "Activities retrieved successfully.",
        activity: data,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "An error occured",
        error: error,
      });
    });
});

router.post("/", (req, res, next) => {
  const maxActivityId = 90;
  const activity = new Activity({
    id: maxActivityId,
    name: req.body.name,
    description: req.body.description,
    numHours: req.body.numHours,
    numMinutes: req.body.numMinutes,
  });

  activity
    .save()
    .then((createdActivity) => {
      res.status(201).json({
        message: "Activity added successfully",
        activity: createdActivity,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "An error occured",
        error: error,
      });
    });
});

module.exports = router;
