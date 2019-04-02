function searchMovieInfo(addedTitle) {
    var url = BASEURL + "?t=" + addedTitle.replace(" ", "+") + "&apikey=" + APIKEY;

    $.get(url, function(result){
        if (result.Error) {
            alert("We couldn't find this movie in the database. What about checking the spelling?");
        }
        else if (result.Type != "movie") {
            alert("The title is not a movie!")
        }
        else {
            addLine(addedTitle, getsCountryCode(result.Country));
            arrTitleInfo.push(result);
            
            showsTable();
            generateCountryChart();
            setCounters();
        }
    });
}

function getsCountryCode(country) {
    const mainCountry = getsMainCountry(country);
    switch (mainCountry) {
        case "USA":
            return "US";
        case "Ireland":
            return "IE";
        case "France":
            return "FR";
        case "Germany":
            return "DE";
        case "Australia":
            return "AU";
        default:
            return "0";
    }
}