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
          src="https://docs.google.com/gview?url=localhost:3000/media/files/Resume.docx&embedded=true"
        />
      </div>
    );
  }
}

export default ResumePage;
