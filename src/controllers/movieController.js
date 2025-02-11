const Movie = require("../models/Movie");
const MovieList = require("../models/MovieList");

const lista = new MovieList();

const movie1 = new Movie("Gente Grande", "Dennis Dugan", "101 minutes", 55); 
lista.addMovie(movie1); 

lista.addMovie(new Movie("Para Todos os Garotos que Já Amei", "Susan Johnson", "99 minutes", 48));

const router = {
    addMovie: (req, res) => {
        try {
            const { title, director, duration, plays } = req.body;
            if (!title || !director || !duration || !plays) {
                throw new Error("Preencha todos os campos!");
            }
            const movie = new Movie(title, director, duration, plays);
            lista.addMovie(movie);
            res.status(200).json({ message: "Criado com sucesso", movie });
        } catch (error) {
            res.status(404).json({
                message: "Erro ao criar o filme!",
                error: error.message,
            });
        }
    },

    getAllMovies: (req, res) => {
        try {
            const movies = lista.getAllMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(404).json({
                message: "Erro ao buscar filmes",
                error: error.message,
            });
        }
    },

    getMovieById: (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).json(lista.getMovieById(id));
        } catch (error) {
            res.status(404).json({
                message: "Erro ao buscar filme por id",
                error: error.message,
            });
        }
    },

    updateMovie: (req, res) => {
        try {
            res.status(200).json(lista.updateMovie(req.params.id, req.body));
        } catch (error) {
            res.status(404).json({
                message: "Erro ao atualizar filme",
                error: error.message,
            });
        }
    },

    deleteMovie: (req, res) => {
        try {
            const movie = req.params.id;
            lista.deleteMovie(movie);
            res.status(200).json({
                message: "Filme deletado com sucesso",
                movie,
            });
        } catch (error) {
            res.status(404).json({
                message: "Erro ao deletar filme",
                error: error.message,
            });
        }
    },
};

module.exports = router;