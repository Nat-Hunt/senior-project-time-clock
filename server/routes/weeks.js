const express = require("express");
const Week = require("../models/week");

const router = express.Router();

router.get("/", (req, res, next) => {
  Week.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "An error occured",
        error: error,
      });
    });
});

router.post("/", (req, res, next) => {
  const week = new Week({
    id: req.body.id,
    name: req.body.name,
    totalHours: req.body.totalHours,
    totalMinutes: req.body.totalMinutes,
    activities: req.body.activities,
  });

  week
    .save()
    .then((createdWeek) => {
      res.status(201).json({
        message: "Week added successfully",
        week: createdWeek,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "An error occured",
        error: error,
      });
    });
});

router.put("/:id", (req, res, next) => {
  Week.findOne({ id: req.params.id })
    .then((week) => {
      week.name = req.body.name;
      week.totalHours = req.body.totalHours;
      week.totalMinutes = req.body.totalHours;
      week.activities = req.body.activities;

      Week.updateOne({ id: req.params.id }, week)
        .then((result) => {
          res.status(204).json({ message: "Week updated successfully" });
        })
        .catch((error) => {
          res.status(500).json({
            message: "An error occurred",
            error: error,
          });
        });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Week not found",
        error: { week: error },
      });
    });
});

router.delete("/:id", (req, res, next) => {
  Week.findOne({ id: req.params.id })
    .then((week) => {
      Week.deleteOne({ id: req.params.id })
        .then((result) => {
          res.status(204).json({
            message: "Week deleted successfully",
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: "An error occurred",
            error: error,
          });
        });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "An error occurred",
        error: { week: error },
      });
    });
});

module.exports = router;
