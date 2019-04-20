import React, { Component } from "react";
import calistscreen from "../media/img/chuckapplistscreen.png";
import caeditscreen from "../media/img/chuckappeditscreen.png";

class ProjectPage extends Component {
  state = {};
  render() {
    return (
      <div class="padding">
        <div class="container">
          <div class="row">
            <div class="col text-center">
              <p>Below are some of the projects I have worked on.</p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 my-auto text-center">
              <h3>
                <a href="/chuckapp">CHUCK QUOTES IOS APP</a>
              </h3>
              <h4>(C#,XAMARIM,LAMP)</h4>
              <p>
                The Chuck app is an app that displays a list of quotes about
                chuck norris. It was one of my first mobile application class
                assignments. This app communicates with a server using a restful
                api to update a mysql database. It had to be updated to run on a
                new server because the original one was shut down after the
                class ended. Clicking the plus symbol allows you to add a Quote.
                Clicking on a quote allows you to view and edit the quote.
                Dragging to the left allows you to delete a quote.{" "}
              </p>
            </div>

            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <img src={calistscreen} />
            </div>

            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <img src={caeditscreen} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectPage;
