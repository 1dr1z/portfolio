import React, { Component } from "react";
import { DataConsumer } from "../context";
import SectionTitle from "./SectionTitle";
import PersonalSkillLang from "./PersonalSkillLang";
import Personal from "./Personal";

export class PersonalSkills extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <SectionTitle>Personal Skills</SectionTitle>
        </div>
        <DataConsumer>
          {value => {
            return value.languages.map(lang => {
              return <PersonalSkillLang key={lang.id} lang={lang} />;
            });
          }}
        </DataConsumer>
        <div className="container personal">
          <div className="personal-half">
            <h1>Communications Skills</h1>
            <ul className="personal-list">
            <DataConsumer>
              {value => {
                return value.commSkills.map(item => {
                  return <Personal key={item.id} item={item} />;
                });
              }}
            </DataConsumer>
            </ul>
          </div>
          <div className="personal-half">
            <h1>Managerial Skills</h1>
            <ul className="personal-list">
            <DataConsumer>
              {value => {
                return value.managerialSkills.map(item => {
                  return <Personal key={item.id} item={item} />;
                });
              }}
            </DataConsumer>
            </ul>
            </div>
          </div>
      </React.Fragment>
    );
  }
}

export default PersonalSkills;
