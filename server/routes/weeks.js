const express = require("express");
const Week = require("../models/week");

const router = express.Router();

router.get("/", (req, res, next) => {
  Week.find()
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json({
        message: "An error occured",
        error: error,
      });
    });
});

router.post("/", (req, res, next) => {
  const maxWeekId = req.body.id + 1;
  const Week = new Week({
    id: maxWeekId,
    name: req.body.name,
    totalHours: req.body.numHours,
    totalMinutes: req.body.numMinutes,
    activities: req.body.activities,
  });

  Week.save()
    .then((createdWeek) => {
      res.status(201).json({
        message: "Week added successfully",
        Week: createdWeek,
      });
    })
    .catch((error) => {
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
      week.totalHours = req.body.numHours;
      week.totalMinutes = req.body.numMinutes;
      week.activities = req.body.activities;

      Week.updateOne({ id: req.params.id }, contact)
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
      res.status(500).json({
        message: "An error occurred",
        error: { week: error },
      });
    });
});

module.exports = router;
