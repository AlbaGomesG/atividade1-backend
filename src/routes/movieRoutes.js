const express = require("express");
const router = express.Router();
const MovieController = require("../controllers/movieController");

router.get("/movies", MovieController.getAllMovies);
router.post("/movies", MovieController.addMovie);
router.put("/movies/:id", MovieController.updateMovie); 
router.delete("/movies:id", MovieController.deleteMovie); 
router.get("/movies/:id", MovieController.getMovieById);

module.exports = router;