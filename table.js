// this function will get the width we need for each column in the table
function colWidths(rows) {
  return rows[0].map(function(_, i) {
    return rows.reduce(function(max, row) {
      return Math.max(max, row[i].toString().length);
    }, 0);
  });
}

//ensures maintained grid structure
function padContent(content, width) {
  var result = '';
  var padding = width - content.toString().length;
  for (var i = 0; i < padding; i++) {
    result += ' ';
  }
  result += content;
  return result;
}

// this function Displays cells in grid structure
exports.drawTable = function(rows) {
  var widths = colWidths(rows);

  function drawRows(row, index) {
    var blocks = row
      .map(function(cell, colNum) {
        return padContent(cell, widths[colNum]);
      })
      .join(' ');
    return blocks;
  }

  return rows.map(drawRows).join('\n');
};
