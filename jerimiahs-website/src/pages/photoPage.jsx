import React, { Component } from "react";
import photo1 from "../media/photography/1.jpg";
import photo2 from "../media/photography/2.jpg";
import photo3 from "../media/photography/3.jpg";
import photo4 from "../media/photography/4.jpg";
import photo5 from "../media/photography/5.jpg";
import photo6 from "../media/photography/6.jpg";
import photo7 from "../media/photography/7.jpg";
import photo8 from "../media/photography/8.jpg";
import photo9 from "../media/photography/9.jpg";
import photo10 from "../media/photography/10.jpg";
import photo11 from "../media/photography/11.jpg";
import photo12 from "../media/photography/12.jpg";
import photo13 from "../media/photography/13.jpg";
import photo14 from "../media/photography/14.jpg";

class PhotoPage extends Component {
  state = {};
  render() {
    return (
      <div class="padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-sm-12">
              <img src={photo1} alt="" />
            </div>
            <div class="col-lg-6 col-sm-12">
              <img src={photo3} alt="" />
            </div>
            <div class="col-lg-6 col-sm-12">
              <img src={photo8} alt="" />
            </div>
            <div class="col-lg-6 col-sm-12">
              <img src={photo9} alt="" />
            </div>
            <div class="col-lg-6 col-sm-12">
              <img src={photo11} alt="" />
            </div>
            <div class="col-lg-6 col-sm-12">
              <img src={photo6} alt="" />
            </div>
            <div class="col-lg-6 col-sm-12">
              <img src={photo10} alt="" />
            </div>
            <div class="col-lg-6 col-sm-12">
              <img src={photo7} alt="" />
            </div>
            <div class="col-lg-6 col-sm-12">
              <img src={photo2} alt="" />
            </div>
            <div class="col-lg-6 col-sm-12">
              <img src={photo5} alt="" />
            </div>
            <div class="col-lg-6 col-sm-12">
              <img src={photo12} alt="" />
            </div>
            <div class="col-lg-6 col-sm-12">
              <img src={photo13} alt="" />
            </div>
            <div class="col-lg-6 col-sm-12">
              <img src={photo14} alt="" />
            </div>
            <div class="col-lg-6 col-sm-12 my-auto">
              <img src={photo4} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoPage;
