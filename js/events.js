$(document).keypress(function(e) {
    if(e.which == 13) $('#btnAdd').click();
});

$("#btnAdd").click(function() {
    var addedTitle = $("#title").val();
    if (!addedTitle) {
        alert("Title is mandatory!");
        return;
    }

    addLine(addedTitle);
    showsTable();
});

$("#btnGenerate").click(function() {
    countContryVotes();
    generateCountryChart();
});

$("#btnDownloadXml").click(function() {

});