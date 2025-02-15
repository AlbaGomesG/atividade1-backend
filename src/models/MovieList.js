class MovieList {
    constructor() {
        this.movies = [];
    }
    addMovie(movie) {
        this.movies.push(movie);
    }
    getAllMovies() {
        return this.movies;
    }

    getMovieById(id){
        const movie = this.movies.find((movie) => movie.id == id);
        if(!movie){
            throw new Error("Filme não encontradado😫, tente outro id!");
        }
        // se o cliente colocar o um id que não está no sistema, ele vai mostrar a mensagem que o filme não foi encontrado e para tentar outro id.
        return movie;
        //se não tiver erro, vei retornar o filme com o id que o cliente colocou.
    }

    updateMovie(id, updateData) {
        const movie = this.getMovieById(id);
        Object.assign(movie, updateData);
        return movie;
    }
    //ele vai pedir o id do filme para atualiar ele, colocando o id, você pode atualizar o filme. Mesmo você querendo atualizar somente uma característica, você tem que colocar as outras características porque se não da erro.

    deleteMovie(id) {
        this.movies = this.movies.filter(movie => movie.id != id);
    }
    //aqui ele vai deletar o filme pelo id dado pelo cliente.

}

module.exports = MovieList;