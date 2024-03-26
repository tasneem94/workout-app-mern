const Workout = require("../models/workoutModel");

//GET all workouts
const getWorkouts = (req, res) => {
  res.json({ msg: "GET all workouts" });
};

//GET a single workout
const getSingleWorkout = (req, res) => {
  res.json({ msg: "GET a single workout" });
};

//POST (Create) a new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Delete a  workout
const deleteWorkout = (req, res) => {
  res.json({ msg: "DELETE a workout" });
};

//UPDATE a workout
const updateWorkout = (req, res) => {
  res.json({ msg: "UPDATE a new workouts" });
};

module.exports = {
  getWorkouts,
  getSingleWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
