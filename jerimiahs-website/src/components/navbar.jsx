import React, { Component } from "react";
import logo from "../media/img/logo2t.png";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="navspace">
        <nav className="navbar navbar-light fixed-top navbar-expand-lg">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="" />
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarResponsive"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/resume">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/photos">
                  Photos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
