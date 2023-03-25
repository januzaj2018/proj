var spreadsheetId = "1-5izghRoyiZgqlYJIXB8mJ5MbW4yT5gn1CVBE0yYAMo";
var range = "Sheet1!A1:C163"; // The range of cells to retrieve data from

// Make a GET request to the Sheets API
$.get(
  "https://sheets.googleapis.com/v4/spreadsheets/" +
    spreadsheetId +
    "/values/" +
    range +
    "?key=YOUR_API_KEY",
  function (data) {
    var rows = data.values;
    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      $("#myTable tbody").append(
        "<tr><td>" +
          row[0] +
          "</td><td>" +
          row[1] +
          "</td><td>" +
          row[2] +
          "</td></tr>"
      );
    }
  }
);
