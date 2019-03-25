function searchMovieInfo(addedTitle) {
    var url = BASEURL + "?t=" + addedTitle.replace(" ", "+") + "&apikey=" + APIKEY;

    $.get(url, function(result){
        if (result.Error) {
            alert("We couldn't find this movie in the database. What about checking the spelling?");
        }
        else {
            addLine(addedTitle, getsCountryCode(result.Country));
            arrTitleInfo.push(result);
        }
    }).done(function() {
        showsTable();
        generateCountryChart();
    });
}

function getsCountryCode(country) {
    return "US";
}