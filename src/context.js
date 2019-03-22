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
  managerialSkills
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
    managerialSkills
  };
  //Methods

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
