function addLine(addedTitle) {
    var table = document.getElementById("title-table");
    var rowsNumber = table.rows.length;
    var line = table.insertRow(rowsNumber);
    var cellTitle = line.insertCell(0);
    var cellRemove = line.insertCell(1);
    cellTitle.innerHTML = addedTitle; 
    cellRemove.innerHTML = "<button type=\"button\" class=\"btn btn-danger\" id=\"btnRemove\" onclick=\"removeLine(this)\"><span class=\"glyphicon glyphicon-remove\"></span></button>"; 

    $("#titulo").val("");

    searchMovieInfo(addedTitle);
}

function removeLine(line) {
    removeDataFromLists(line.parentNode.parentNode.rowIndex);

    var table = document.getElementById("title-table");
      var i = line.parentNode.parentNode.rowIndex;
      table.deleteRow(i);

      if (table.rows.length == 1){
        $("#title-table").hide();
        $("#table-buttons").hide();
    }
}

function removeDataFromLists(rowIndex) {
    arrTitleInfo.splice(rowIndex - 1, 1);
}

function showsTable() {
    if ($("#title-table").is(":hidden")) {
        $("#title-table").show();
        $("#table-buttons").show();
    }
}