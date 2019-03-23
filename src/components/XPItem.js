import React, { Component } from "react";

export class XPItem extends Component {
  render() {
    const {
      position,
      organization,
      dateRange,
      description,
      link
    } = this.props.item;
    return (
      <div className="container">
        <div className="item-card">
          <div className="title-row">
            <p className="col-3">{position}</p>
            <p className="col-3">
              {link === " " ? (
                organization
              ) : (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt" />
                  {organization}
                </a>
              )}
            </p>
            <p className="col-3">{dateRange}</p>
          </div>
          <p className="col-1">{description}</p>
        </div>
      </div>
    );
  }
}

export default XPItem;
