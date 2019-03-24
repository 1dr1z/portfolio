import React, { Component } from "react";
import {
  cover,
  profile,
  basicInfo,
  education,
  workExperience,
  projects,
  competitions,
  langAndTechs,
  languages,
  commSkills,
  managerialSkills,
  footer,
  gitLinks
} from "./myData";

const DataContext = React.createContext();

class DataProvider extends Component {
  //Data
  state = {
    cover,
    profile,
    basicInfo,
    education,
    workExperience,
    projects,
    competitions,
    langAndTechs,
    languages,
    commSkills,
    managerialSkills,
    footer,
    gitData: {},
    gitRepos: [],
    gitLinks
  };
  //Methods
  getGit = () => {
    fetch(this.state.gitLinks[0].link)
      .then(response => response.json())
      .then(gitData => this.setState({ gitData }));
  };

  getRepos = () => {
    fetch(this.state.gitLinks[1].link)
      .then(response => response.json())
      .then(gitRepos => this.setState({ gitRepos }));
  };

  componentDidMount = () => {
    this.getGit();
    this.getRepos();
  };

  render() {
    return (
      <DataContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

const DataConsumer = DataContext.Consumer;

export { DataProvider, DataConsumer };
