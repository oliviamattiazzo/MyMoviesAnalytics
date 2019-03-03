function searchMovieInfo(addedTitle) {
    var url = BASEURL + "?t=" + addedTitle.replace(" ", "+") + "&apikey=" + APIKEY;

    $.get(url, function(result){
        arrTitleInfo.push(result);
    });
}