import React, { Component } from "react";
import SectionTitle from "./SectionTitle";
import CompetitionItem from "./CompetitionItem";
import { DataConsumer } from "../context";

export class Competitions extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <SectionTitle>Competitions</SectionTitle>
        </div>
        <DataConsumer>
          {value => {
            return value.competitions.map(item => {
              return <CompetitionItem key={item.id} item={item} />;
            });
          }}
        </DataConsumer>
      </React.Fragment>
    );
  }
}

export default Competitions;
