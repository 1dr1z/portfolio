import React, { Component } from "react";

export class ProjectItem extends Component {
  render() {
    const { type, title, dateRange, description, link } = this.props.item;
    return (
      <React.Fragment>
        <div className="container">
          <div className="item-card">
            <div className="title-row">
              <p className="col-3">{type}</p>
              <p className="col-3">
                {link === " " ? (
                  title
                ) : (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {title}
                  </a>
                )}
              </p>
              <p className="col-3">{dateRange}</p>
            </div>
            <p className="col-1">{description}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectItem;
