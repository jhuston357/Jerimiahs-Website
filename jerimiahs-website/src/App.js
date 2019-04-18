import React, { Component } from "react";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/homePage";
import Footer from "./components/footer";
import ProjectPage from "./pages/projectPage";
import Page404 from "./pages/page404";
import AboutPage from "./pages/aboutPage";
import PhotoPage from "./pages/photoPage";
import ResumePage from "./pages/resumePage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/resume" component={ResumePage} />
            <Route path="/projects" component={ProjectPage} />
            <Route path="/photos" component={PhotoPage} />
            <Route path="/about" component={AboutPage} />
            <Route component={Page404} />
          </Switch>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
