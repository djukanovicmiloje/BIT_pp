(function main() {
    function Genre(name) {
        this.name = name;
        this.getData = function() {
            return (name[0] + name[name.length - 1]).toUpperCase();
        }
    }

    function Movie(genre, name, length) {
        this.genre = genre;
        this.name = name;
        this.length = length;
        this.getData = function() {
            return name + " " + length + " " + this.genre.getData();
        }
    }

    function Program(date) {
        this.date = date;
        this.listOfMovies = [];
        this.numberOfMovies = 0;
        this.durationOfProgram = 0;
        this.getData = function() {
            var output = String(this.date) + this.durationOfProgram + "min \n";
            for (var i in this.listOfMovies) {
                output += this.listOfMovies[i].getData() + "\n";
            }
            return output;
        }
        this.addMovie = function(movie) {
            this.listOfMovies.push(movie);
            this.numberOfMovies++;
            this.durationOfProgram += parseInt(movie.length);
        }
    }

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
        this.numberOfMovies = 0;
        this.addProgram = function(program) {
            this.listOfPrograms.push(program);
            this.numberOfMovies += program.numberOfMovies;
        }
        this.getData = function() {
            var output = this.name + " festival has " + this.numberOfMovies + " movie titles \n";
            for (var i in this.listOfPrograms) {
                output += this.listOfPrograms[i].getData();
            }
            return output;
        }
    }
    var action = new Genre("Action");
    var spiderMan = new Movie(action, "Spider Man", "133min");
    var sampleProgram = new Program(new Date());

    for (var i = 0; i < 10; i++) {
        sampleProgram.addMovie(spiderMan);
    }
    /* console.log(sampleProgram.getData()); */

    var sampleFestival = new Festival("SpiderManFest");

    for (var i = 0; i < 10; i++) {
        sampleFestival.addProgram(sampleProgram);
    }
    console.log(sampleFestival.getData());

})();