const express = require('express');

const router = express.Router()

const {getExercises, getExerciseById, createExercise, updateExcercise, deleteExercise} = require('../controllers/exerciseController');


router.route("/").get(getExercises).post(createExercise);

router
.route("/:id")
.get(getExercises)
.put(updateExcercise)
.delete(deleteExercise)
