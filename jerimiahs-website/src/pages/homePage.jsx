import React, { Component } from "react";
import jjhcf from "../media/img/jjhCF.jpg";
import hockey from "../media/img/hockey.jpg";
import snowboarding from "../media/img/snowboarding.png";
import whiteboard from "../media/img/wtbrdalg169.jpg";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <section>
            <div className="landing-text">
              <h1>Jerimiah Huston</h1>
              <h3>Computer Scientist</h3>
            </div>
            <div className="home-wrap">
              <div id="home" />
            </div>
          </section>

          <div className="padding">
            <div className="container">
              <div className="row">
                <div className="col text-center">
                  <p>
                    Hi, I'm Jerimiah the creator of this website. I have a
                    bachelor's in Computer Science from the University of
                    Pittsburgh at Johnstown. I've created this website for many
                    reasons, to learn more about web programing, to display my
                    work, and for the fun of it ... I've always wanted to create
                    a website. Through this website you can view the various
                    projects I have been working on, take a look at my resume
                    and there are even a selection of photos I've taken.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 my-auto">
                  <img src={jjhcf} alt="" />
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <img src={hockey} alt="" />
                  <img src={snowboarding} alt="" />
                  <img src={whiteboard} alt="" />
                </div>
              </div>
            </div>
          </div>
          <figure>
            <div className="fixed-wrap">
              <div id="fixed" />
            </div>
          </figure>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
