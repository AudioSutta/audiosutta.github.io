<script>
  function arrayToTable(tableData) {
    var table = $('<table></table>');
    $(tableData).each(function(i, rowData) {
      var row = $('<tr></tr>');
      $(rowData).each(function(j, cellData) {
        row.append($('<td>' + cellData + '</td>'));
      });
      table.append(row);
    });
    return table;
  }

  $.ajax({
    type: "GET",
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vS6JJL3ePsnRKYtZ2926L8KnmujZIPi5EpRPtNLveuGiMyNcDlawbfbcydOZK3PI6fDgLeunx_3NFWm/pub?output=csv",
    success: function(data) {
      $('article').append(arrayToTable(Papa.parse(data).data));
    }
  });
</script>
