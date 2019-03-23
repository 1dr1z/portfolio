import React, { Component } from "react";
import { DataConsumer } from "../context";
import ProjectItem from "./ProjectItem";
import SectionTitle from "./SectionTitle";

export class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <SectionTitle>Projects</SectionTitle>
        </div>
        <DataConsumer>
          {value => {
            return value.projects.map(item => {
              return <ProjectItem key={item.id} item={item} />;
            });
          }}
        </DataConsumer>
      </React.Fragment>
    );
  }
}

export default Projects;
