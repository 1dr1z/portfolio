import React, { Component } from "react";
import { DataConsumer } from "../context";

export class GitProfile extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="git-profile">
          <DataConsumer>
            {value => {
              const { gitData } = value;
              return (
                <div className="git-data">
                  <a
                    href={gitData.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={gitData.avatar_url}
                      alt="git-profile"
                      className="git-profile-img"
                    />
                    <p className="git-username">{gitData.login}</p>
                    <div className="git-numbers">
                      <p>Repositories: {gitData.public_repos}</p>
                    </div>
                  </a>
                 </div>
              );
            }}
          </DataConsumer>
        </div>
      </React.Fragment>
    );
  }
}

export default GitProfile;
