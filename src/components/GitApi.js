import React, { Component } from "react";
import { DataConsumer } from "../context";
import SectionTitle from "./SectionTitle";
import GitProfile from "./GitProfile";

export class GitApi extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <SectionTitle>GitHub Projects</SectionTitle>
        </div>
        <div className="container clearfix">
          <GitProfile />
          <div className="git-repos">
            <ul>
              <DataConsumer>
                {value => {
                  return value.gitRepos.map(item => {
                    return (
                      <a
                          href={item.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                      <li key={item.id}>
                        <i className="fas fa-chevron-circle-right"></i>
                          {item.name} 
                      </li>
                      </a>
                    );
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

export default GitApi;
