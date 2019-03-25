function setValueNumberOfMoviesCounter(numberMovies) {
    $("#watched-movies-number").html(numberMovies);
}

function setValueTimeWatchingMoviesCounter() {
    var totalTime = 0;

    const moviesTimes = arrTitleInfo.map(function (element) {
        const splitTime = element.Runtime.split(" ");
        return splitTime[0];
    });

    moviesTimes.forEach(function (element) {
        totalTime += parseInt(element);
    });

    $("#watched-movies-time").html(timeProcessor(totalTime));
}