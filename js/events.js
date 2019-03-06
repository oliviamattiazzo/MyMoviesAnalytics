$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
})
.keypress(function (e) {
    if (e.which == 13) $('#btnAdd').click();
});

var btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", function () {
    countryChart.destroy();
});

$("#btnAdd").click(function () {
    var addedTitle = $("#title").val();
    if (!addedTitle) {
        alert("Title is mandatory!");
        return;
    }

    searchMovieInfo(addedTitle);
});

$("#btnDownloadXml").click(function () {
    downloadsXml();
});

$("#btnUploadXml").click(function(){
    $("#inpXmlFile").click();
});

$("#inpXmlFile").change(function () {
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xml)$/;

    if (regex.test($("#inpXmlFile").val().toLowerCase())) {
        if (typeof (FileReader) != "undefined") {
            var reader = new FileReader();
            
            reader.readAsText($("#inpXmlFile")[0].files[0]);
            var xmlDoc = $.parseXML(reader.result);
            var movies = $(xmlDoc).find("movies").find("title");

            for (var i=0; i < movies.length; i++) {
                searchMovieInfo(movies[i].innerHTML);
            }
        } else {
            alert("This browser does not support HTML5.");
        }
    } else {
        alert("Please upload a valid XML file.");
    }
});