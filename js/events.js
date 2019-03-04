$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
})
.keypress(function(e) {
    if(e.which == 13) $('#btnAdd').click();
});

var btnGenerate = document.getElementById("btnGenerate");
btnGenerate.addEventListener("click", function(){
    countryChart.destroy();
});

$("#btnAdd").click(function() {
    var addedTitle = $("#title").val();
    if (!addedTitle) {
        alert("Title is mandatory!");
        return;
    }

    searchMovieInfo(addedTitle);
});

$("#btnGenerate").click(function() {
    countContryVotes();
    generateCountryChart();
});

$("#btnDownloadXml").click(function() {

});