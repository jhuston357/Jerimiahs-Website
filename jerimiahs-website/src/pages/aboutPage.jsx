import React, { Component } from "react";
import logo from "../media/img/logo2t.png";
class AboutPage extends Component {
  state = {};
  render() {
    return (
      <div class="padding">
        <div class="container">
          <div class="row text-center">
            <div class="col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-sm-4 offset-sm-4 text-center">
              <hr />
              <img src={logo} alt="" />
              <hr />
              <p> 724-980-8867 </p>
              <p> Jhuston357@live.com </p>
              <p> 116 Newman Ln </p>
              <p> Sarver,Pa,16055 </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
