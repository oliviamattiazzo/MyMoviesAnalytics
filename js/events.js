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
            reader.onload = function (e) {
                var xmlDoc = $.parseXML(e.target.result);
                var customers = $(xmlDoc).find("Customer");

                //Create a HTML Table element.
                var table = $("<table />");
                table[0].border = "1";

                //Add the header row.
                var row = $(table[0].insertRow(-1));
                customers.eq(0).children().each(function () {
                    var headerCell = $("<th />");
                    headerCell.html(this.nodeName);
                    row.append(headerCell);
                });

                //Add the data rows.
                $(customers).each(function () {
                    row = $(table[0].insertRow(-1));
                    $(this).children().each(function () {
                        var cell = $("<td />");
                        cell.html($(this).text());
                        row.append(cell);
                    });
                });

                var dvTable = $("#dvTable");
                dvTable.html("");
                dvTable.append(table);
            }
            reader.readAsText($("#fileUpload")[0].files[0]);
        } else {
            alert("This browser does not support HTML5.");
        }
    } else {
        alert("Please upload a valid XML file.");
    }
});