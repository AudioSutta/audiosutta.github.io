---
layout: plain
sitemap: false
---


# TABLE DES SUTTAS
Pour éditer le tableau, [clicker ici](https://docs.google.com/spreadsheets/d/1oaNpv9M5f5pc6gEi2Pl2Wya4NUf7P8hQfvhBSVPdQto/edit?usp=sharing) et pour les liens des [SOURCES](/SOURCES){:.heading.flip-title}.


<style>
  table {
    border-collapse: collapse;
    border: 2px black solid;
    font: 12px sans-serif;
  }

  td {
    border: 1px black solid;
    padding: 5px;
  }
</style>
<script src="https://d3js.org/d3.v7.min.js"></script>

<script type="text/javascript" charset="utf-8">
  d3.text("https://docs.google.com/spreadsheets/d/e/2PACX-1vS6JJL3ePsnRKYtZ2926L8KnmujZIPi5EpRPtNLveuGiMyNcDlawbfbcydOZK3PI6fDgLeunx_3NFWm/pub?output=csv", function(data) {
    var parsedCSV = d3.csv.parseRows(data);

    var container = d3.select("body")
      .append("table")

      .selectAll("tr")
      .data(parsedCSV).enter()
      .append("tr")

      .selectAll("td")
      .data(function(d) {
        return d;
      }).enter()
      .append("td")
      .text(function(d) {
        return d;
      });
  });
</script>
