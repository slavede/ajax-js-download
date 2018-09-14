$(document).ready(function() {
  download = function(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}


  downloadFile = function() {
    $.ajax('/api/file', {
      success: function(response) {

        download(response.csv, 'myfile.txt', 'txt')

      },
      error: function(errorResponse) {
        console.log('Error response');
        console.log(errorResponse);
      }

    })
  }
});
