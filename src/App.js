import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Competitions from "./components/Competitions";
import LangAndTech from "./components/LangAndTech";
import PersonalSkills from "./components/PersonalSkills";
import GitApi from "./components/GitApi";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Education />
        <WorkExperience />
        <Projects />
        <Competitions />
        <LangAndTech />
        <PersonalSkills />
        <GitApi />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
