function movies(input) {
    let moviesList = [];

    for (const line of input) {
        let commandTokens = line.split(" ");

        if (line.includes("addMovie")) {
            let movieName = commandTokens.slice(1).join(" ");
            addMovie(movieName);
        } else if (line.includes(" directedBy ")) {
            let info = line.split(" directedBy ");
            let movieName = info[0];
            let director = info[1];
            addDirector(movieName, director);
        } else if (line.includes(" onDate")) {
            let info = line.split(" onDate ");
            let movieName = info[0];
            let date = info[1];
            addDate(movieName, date);
        }
    }

    let filteredMovies = moviesList
    .filter((movie) => movie.hasOwnProperty("name") && movie.hasOwnProperty("director") && movie.hasOwnProperty("date"));

    for (const movie of filteredMovies) {
        console.log(JSON.stringify(movie));
    }

    function addMovie(name) {
        moviesList.push({name});
    }
    
    function addDirector(name, director) {
        let movie = moviesList.find((m) => m.name === name);
        if (movie){
            movie.director = director;
        }
    }

    function addDate(name, date) {
        let movie = moviesList.find((m) => m.name === name);
        if (movie) {
            movie.date = date;
        }
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
);

console.log('\n');

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
);


// Task description
// 
// Write a function that stores information about movies inside an array. The movie's object info must be name, director, and date.
// You can receive several types of input:
// • "addMovie {movie name}" – add the movie
// • "{movie name} directedBy {director}" – check if the movie exists and then add the director
// • "{movie name} onDate {date}" – check if the movie exists and then add the date
// 
// At the end print all the movies that have all the info (if the movie has no director, name, or date, don’t print it) in JSON format.
