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
    var imdb = 0;
    var rottenTomatoes = 0;
    var counterImdb = 0;
    var counterRt = 0;

    const ratingsArray = arrTitleInfo.map(function (element){
        return element.Ratings;
    });

    ratingsArray.forEach(function (element){
        if (element[0] != undefined) {
            imdb += parseFloat(element[0].Value.split("/")[0]);
            counterImdb += 1;
        }

        if (element[1] != undefined) {
            rottenTomatoes += parseFloat(element[1].Value.substring(0, element[1].Value.length - 1));
            counterRt += 1;
        }
    });

    const averageImdb = imdb / counterImdb;
    const averateRottenTomatoes = rottenTomatoes / counterRt;

    const lblRatings = "IMDB: " + parseFloat(averageImdb.toFixed(1)) + "/10" +
                        " | Rotten Tomatoes: " + parseInt(averateRottenTomatoes) + "%";

    $("#average-rating").html(lblRatings);
}

function setCounters() {
    setValueNumberOfMoviesCounter();
    setValueTimeWatchingMoviesCounter();
    setValueAverageRatings();
}