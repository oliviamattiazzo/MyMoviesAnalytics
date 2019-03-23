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

function timeProcessor(timeInMinutes) {
    if (timeInMinutes < 60)
        return timeInMinutes  + " minutes";

    const hoursInDecimal = timeInMinutes / 60;
    const hoursInInt = parseInt(hoursInDecimal);

    if (hoursInInt < 24)
        return minutesToHourConverter(hoursInDecimal, hoursInInt);
    //if (hoursInInt >= 24 && hoursInInt < 168)
        //days
    //if (hoursInInt >= 168 && hoursInInt < 730)
        //weeks
    //if (hoursInInt >= 730 && hoursInInt < 8760)
        //months
    //if (hoursInInt >= 8760)
        //year
}

function minutesToHourConverter(hoursInDecimal, hoursInInt) {
    const minutes = parseInt( (hoursInDecimal - hoursInInt) * 60 );
    
    return hoursInInt + " hours and " + minutes + " minutes";
}