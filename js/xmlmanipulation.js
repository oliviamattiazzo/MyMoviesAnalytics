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
    var bb = new Blob([xmlText], {type: 'text/plain'});
    
    var pom = document.createElement('a');
    pom.setAttribute('href', window.URL.createObjectURL(bb));
    pom.setAttribute('download', filename);
    
    pom.dataset.downloadurl = ['text/plain', pom.download, pom.href].join(':');
    pom.draggable = true; 
    pom.classList.add('dragout');

    pom.click();
}