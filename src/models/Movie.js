const { v4: uuid4 } = require("uuid");

class Movie{
    constructor(title, director, duration, plays = 0) {
        this.id = uuid4();
        this.title = title;
        this.director = director;
        this.duration = duration;
        this.plays = plays;
    }

    play(){
        //quantas vezes o filme foi reproduzido!
        this.plays += 1;
    }
}

module.exports = Movie;