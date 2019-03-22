import React, { Component } from "react";
import { DataConsumer } from "../context";

export class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <DataConsumer>
            {value => {
              const { cover, profile, basicInfo } = value;
              return (
                <React.Fragment>
                  <div className="cover">
                    <img
                      src={cover.img}
                      alt={cover.title}
                      className="cover-photo"
                    />
                  </div>
                  <div className="profile-image">
                    <img src={profile.img} alt={profile.title} />
                  </div>
                  <div className="basic-info">
                    <div className="data region">
                      <ul className="items">
                        <li className="item">
                          <i className="fas fa-map-marker-alt" />
                          {basicInfo.address}
                        </li>
                        <li className="item">
                          <i className="fas fa-building" />
                          {basicInfo.city}, {basicInfo.ZIP}
                        </li>
                        <li className="item">
                          <i className="fas fa-globe-europe" />
                          {basicInfo.country}
                        </li>
                      </ul>
                    </div>
                    <div className="data fullname">
                      <ul className="items">
                        <li className="item">
                          <h3>{basicInfo.fullName}</h3>
                        </li>
                      </ul>
                    </div>
                    <div className="data contact">
                      <ul className="items">
                        <li className="item">
                          <i className="fas fa-mobile-alt" />
                          {basicInfo.phoneNo}
                        </li>
                        <li className="item">
                          <a href={"mailto:" + basicInfo.email}>
                            <i className="fas fa-envelope" />
                            {basicInfo.email}
                          </a>
                        </li>
                        <li className="item">
                          <a href={basicInfo.linkedin}>
                            <i class="fab fa-linkedin" />Idriz Mehmedovic
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </React.Fragment>
              );
            }}
          </DataConsumer>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
