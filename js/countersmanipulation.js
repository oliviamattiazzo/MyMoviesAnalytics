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
    const ratingsArray = arrTitleInfo.Ratings;

    
}

function setCounters() {
    setValueNumberOfMoviesCounter();
	setValueTimeWatchingMoviesCounter();
}