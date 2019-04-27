import React, { Component } from "react";

class ChuckAppPage extends Component {
<<<<<<< HEAD
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
=======
  state = {
    chucks: []
  };

  componentDidMount() {
    fetch("http://ec2-3-19-68-119.us-east-2.compute.amazonaws.com/api/chucks")
      .then(res => res.json())
      .then(json => {
        this.setState({ chucks: json });
      });
  }

  render() {
    var { chucks } = this.state;
    return (
      <div className="padding">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h3>CHUCK QUOTES</h3>
            </div>
          </div>
          <div className="row">
            <table className="table table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>ChuckQuote</th>
                  <th>EnteredBy</th>
                  <th>QuoteDate</th>
                </tr>
              </thead>
              {chucks.map(chucks => (
                <tbody key={chucks.ID}>
                  <tr>
                    <td>{chucks.ID}</td>
                    <td>{chucks.ChuckQuote}</td>
                    <td>{chucks.EnteredBy}</td>
                    <td>{chucks.QuoteDate}</td>
                  </tr>
                </tbody>
              ))}
            </table>
>>>>>>> master
          </div>
        </div>
      </div>
    );
  }
<<<<<<< HEAD
=======

  jsontotable(json) {
    var output = "";
    var ckarr = JSON.parse(json);
    output =
      "<table style='width:100%'><tr><th>ID</th><th>ChuckQuote</th><th>EnteredBy</th><th>QuoteDate</th></tr>";
    for (var x in ckarr) {
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
>>>>>>> master
}

export default ChuckAppPage;
