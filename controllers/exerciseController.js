const asyncHandler = require("express-async-handler");

const getExercises = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all exercises" });
});

const getExerciseById = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get an exercise for ${req.params.id}` });
});

const createExercise = asyncHandler(async (req, res) => {
  console.log("testing the: ", req.body);
  if (!req.body.name || !req.body.description) {
    return res
      .status(400)
      .json({ message: "Name and description are required" });
  } else {
    const newExercise = await req.context.models.exercise.create(req.body);
    res.status(201).json(newExercise);
  }
});

const updateExercise = asyncHandler(async (req, res) => {
  const updatedExercise = await req.context.models.exercise.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  ); //sets the fields of a document to the values specified in the query parameter
  if (!updatedExercise) {
    return res
      .status(404)
      .json({ message: "No Exercise with this id was found!" });
  } else {
    res.json(updatedExercise);
  }
});

const deleteExercise = asyncHandler(async(req, res) => {
    const deletedExercise = await req.context.models.exercise.deleteOne({_id : req.params.id})
    if(!deletedExercise){
      return res.status(404).json('No exercise with this ID could be found')
      }else{
        res.json(deletedExercise)
        }
})

module.exports = {
  getExercises,
  getExerciseById,
  updateExercise,
  deleteExercise
}
