---
layout: plain
sitemap: false
---


# TABLE DES SUTTAS
Pour éditer le tableau, [clicker ici](https://docs.google.com/spreadsheets/d/1oaNpv9M5f5pc6gEi2Pl2Wya4NUf7P8hQfvhBSVPdQto/edit?usp=sharing) et pour les liens des [SOURCES](/SOURCES){:.heading.flip-title}.


<script type="module" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="module" src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/4.1.2/papaparse.js"></script>
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
