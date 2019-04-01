function setValueNumberOfMoviesCounter() {
    $("#watched-movies-number").html(arrTitleInfo.length);
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

function setValueAverageRatings() {
    const ratingsArray = arrTitleInfo[arrTitleInfo.length - 1].Ratings;

    const imdb = ratingsArray[0].Value;
    const rottenTomatoes = ratingsArray[1].Value;
    console.log(imdb);
    console.log(rottenTomatoes);
}

function setCounters() {
    setValueNumberOfMoviesCounter();
    setValueTimeWatchingMoviesCounter();
    setValueAverageRatings();
}