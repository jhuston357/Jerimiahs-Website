import React, { Component } from "react";

class ChuckAppPage extends Component {
  state = {};

  componentDidMount() {
    function jsontotable(json) {
      var output = "";
      var ckarr = JSON.parse(json);
      var x;
      output =
        "<table style='width:100%'><tr><th>ID</th><th>ChuckQuote</th><th>EnteredBy</th><th>QuoteDate</th></tr>";
      for (x in ckarr) {
        output =
          output +
          "<tr><td>" +
          ckarr[x].ID +
          "</td><td>" +
          ckarr[x].ChuckQuote +
          "</td><td>" +
          ckarr[x].EnteredBy +
          "</td><td>" +
          ckarr[x].QuoteDate +
          "</td></tr>";
      }
      return output + "</table>";
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("chucktable").innerHTML = jsontotable(
          this.responseText
        );
      }
    };
    xhttp.open("GET", "/api/chuckdata.php", true);
    xhttp.send();
  }

  render() {
    return (
      <div class="padding">
        <div class="container">
          <div class="row">
            <div class="col text-center">
              <h3>CHUCK QUOTES TABLE</h3>
            </div>
          </div>
          <div class="row">
            <div class="col" id="chucktable" />
          </div>
        </div>
      </div>
    );
  }
}

export default ChuckAppPage;
