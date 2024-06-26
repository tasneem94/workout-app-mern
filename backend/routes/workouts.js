const express = require("express");
const {
  getWorkouts,
  getSingleWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");

// require auth for all workout routes
router.use(requireAuth);

//GET all workouts
router.get("/", getWorkouts);

//GET a single workout
router.get("/:id", getSingleWorkout);

//POST (Create) a new workout
router.post("/", createWorkout);

//Delete a  workout
router.delete("/:id", deleteWorkout);

//UPDATE a workout
router.patch("/:id", updateWorkout);

module.exports = router;
