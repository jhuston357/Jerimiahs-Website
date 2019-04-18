import React, { Component } from "react";

class Page404 extends Component {
  state = {};
  render() {
    return (
      <div class="padding">
        <div class="container">
          <div class="row">
            <div class="col text-center">
              <h1>
                PAGE NOT FOUND! <br /> 404
              </h1>
              <h2>Sorry it seems this page has not been created yet</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page404;
