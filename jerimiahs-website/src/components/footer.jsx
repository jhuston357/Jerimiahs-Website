import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="container-fluid text-center">
        <div className="row">
          <div className="col-sm-6 text-center">
            <h3> Contact </h3>
            Phone:<a href="tel:+17249808867"> (724)-980-8867</a>
            <br />
            Email:<a href="mailto:jhuston357@live.com"> Jhuston357@live.com</a>
          </div>
          <div className="col-sm-6 text-center">
            <h3> Social Media </h3>
            <a
              href="https://www.facebook.com/JerimiahHuston"
              className="fa fa-facebook"
            />
            <a
              href="https://www.linkedin.com/in/jhuston357/"
              className="fa fa-linkedin"
            />
            <a href="https://github.com/jhuston357" className="fa fa-github" />
            <a
              href="https://www.youtube.com/watch?v=HLjLHsTAO2w&t"
              className="fa fa-youtube"
            />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
