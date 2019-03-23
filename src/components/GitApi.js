import React, { Component } from "react";
import { DataConsumer } from "../context";
import SectionTitle from "./SectionTitle";

export class GitApi extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <SectionTitle>GitHub Projects</SectionTitle>
        </div>
      </React.Fragment>
    );
  }
}

export default GitApi;
