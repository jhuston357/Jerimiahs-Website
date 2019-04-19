import React, { Component } from "react";

class ResumePage extends Component {
  state = {};
  render() {
    return (
      <div className="resume-view">
        <iframe
          title="resume"
          className="res-frame"
          width="100%"
          height="100%"
          frameborder="0"
          src="https://docs.google.com/document/d/1sDOBzIUkSE6jMIO6p8gQHaSHByfZbpsiNtXjhVVZm0E/edit?usp=sharing"
        />
      </div>
    );
  }
}

export default ResumePage;
