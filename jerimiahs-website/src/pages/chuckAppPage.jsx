import React, { Component } from "react";
var cors = require("cors");

class ChuckAppPage extends Component {
  state = {
    chucks: []
  };

  componentDidMount() {
    var { chucks } = this.state;
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
            <ul>
              {chucks.map(chucks => (
                <li key={chucks.ID}>{chucks.ChuckQuote}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

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
}

export default ChuckAppPage;
