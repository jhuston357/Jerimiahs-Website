import React, { Component } from "react";

class ChuckAppPage extends Component {
  state = {
    chucks: []
  };

  componentDidMount() {
    fetch("http://jherver.tk/api/chucks")
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
          </div>
        </div>
      </div>
    );
  }
}

export default ChuckAppPage;
