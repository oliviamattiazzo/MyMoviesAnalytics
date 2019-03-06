$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
}).keypress(function (e) {
    if (e.which == 13) $('#btnAdd').click();
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

$("#btnUploadXml").click(function () {
    $("#inpXmlFile").click();
});

$("#inpXmlFile").change(function () {
    var fileUploaded = $("#inpXmlFile")[0].files[0];
    
    if (validatesXmlExtension($("#inpXmlFile").val().toLowerCase())) {
        importXml(fileUploaded);
    } else {
        alert("Please upload a valid XML file.");
    }
});