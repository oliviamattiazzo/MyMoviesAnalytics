function createXmlText() {
    var numberOfMovies = arrTitleInfo.length;

    var xml = '<?xml version="1.0" encoding="ISO-8859-1"?>';
    xml += '<movies>';

    for (var count = 0; count < numberOfMovies; count++) {
        xml += `<title>${arrTitleInfo[count].Title}</title>`
    }

    xml += '</movies>';
    return xml;
}

function downloadsXml() {
    var xmlText = createXmlText();
    var filename = "mymovies.xml";
    var bb = new Blob([xmlText], { type: 'text/plain' });

    var pom = document.createElement('a');
    pom.setAttribute('href', window.URL.createObjectURL(bb));
    pom.setAttribute('download', filename);

    pom.dataset.downloadurl = ['text/plain', pom.download, pom.href].join(':');
    pom.draggable = true;
    pom.classList.add('dragout');

    pom.click();
}

function importXml(fileUploaded) {
    if (typeof (FileReader) != "undefined") {
        var reader = new FileReader();

        reader.onload = function () {
            var xmlDoc = $.parseXML(reader.result);
            var movies = $(xmlDoc).find("movies").find("title");

            for (var i = 0; i < movies.length; i++) {
                searchMovieInfo(movies[i].innerHTML);
            }
        };
        reader.readAsText(fileUploaded);
    } else {
        alert("This browser does not support HTML5.");
    }
}

function validatesXmlExtension(fileName) {
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xml)$/;
    return regex.test(fileName);
}