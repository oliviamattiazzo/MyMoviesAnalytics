function addLine(addedTitle, countryCode) {
    var table = document.getElementById("title-table");
    var rowsNumber = table.rows.length;
    
    var line = table.insertRow(rowsNumber);

    var cellTitle = line.insertCell(0);
    var cellFlag = line.insertCell(1);
    var cellRemove = line.insertCell(2);

    cellTitle.innerHTML = addedTitle; 
    cellFlag.innerHTML = '<img src="https://www.countryflags.io/' + countryCode + '/shiny/32.png" class="img-flag">';
    cellRemove.innerHTML = "<button type=\"button\" id=\"btnRemove\" class=\"btn btn-danger\" data-toggle=\"tooltip\" title=\"Remove movie\" onclick=\"removeLine(this)\"><span class=\"glyphicon glyphicon-remove\"></span></button>"; 

    $("#title").val("");
}

function removeLine(line) {
    removeDataFromLists(line.parentNode.parentNode.rowIndex);

    var table = document.getElementById("title-table");
    var i = line.parentNode.parentNode.rowIndex;
    table.deleteRow(i);

    generateCountryChart();

    if (table.rows.length == 1){
        hideTableAndChart();    
    }
}

function removeDataFromLists(rowIndex) {
    arrTitleInfo.splice(rowIndex - 1, 1);
}

function showsTable() {
    if ($("#title-table").is(":hidden")) {
        $("#title-table").show();
        $(".information-label").show();
    }
}

function hideTableAndChart() {
    $("#title-table").hide();
    $("#canvas-holder").hide();
    $(".information-label").hide();
}