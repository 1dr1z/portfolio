import React, { Component } from "react";
import { DataConsumer } from "../context";
import LangTechItem from "./LangTechItem";
import SectionTitle from "./SectionTitle";

export class LangAndTech extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <SectionTitle>Languages and Technologies</SectionTitle>
        </div>
        <div className="container lang-and-tech">
          <DataConsumer>
            {value => {
              return value.langAndTechs.map(item => {
                return <LangTechItem key={item.id} item={item} />;
              });
            }}
          </DataConsumer>
        </div>
      </React.Fragment>
    );
  }
}

export default LangAndTech;
