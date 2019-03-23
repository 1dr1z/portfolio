import React, { Component } from "react";
import { DataConsumer } from "../context";
import SectionTitle from "./SectionTitle";
import EduItem from "./EduItem";

export class Education extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <SectionTitle>Education</SectionTitle>
        </div>
        <DataConsumer>
          {value => {
            return value.education.map(item => {
              return <EduItem key={item.id} item={item} />;
            });
          }}
        </DataConsumer>
      </React.Fragment>
    );
  }
}

export default Education;
