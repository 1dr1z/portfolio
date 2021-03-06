import React, { Component } from "react";
import XPItem from "./XPItem";
import { DataConsumer } from "../context";
import SectionTitle from "./SectionTitle";

export class WorkExperience extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <SectionTitle>work experience</SectionTitle>
        </div>
        <DataConsumer>
          {value => {
            return value.workExperience.map(item => {
              return <XPItem key={item.id} item={item} />;
            });
          }}
        </DataConsumer>
      </React.Fragment>
    );
  }
}

export default WorkExperience;
