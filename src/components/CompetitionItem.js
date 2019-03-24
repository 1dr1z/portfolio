import React, { Component } from "react";

export class CompetitionItem extends Component {
  render() {
    const {
      competition,
      dateRange,
      description,
      link,
      title
    } = this.props.item;
    return (
      <React.Fragment>
        <div className="container">
          <div className="item-card">
            <div className="title-row clearfix small">
              <p className="col-3">
                {link === " " ? (
                  competition
                ) : (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt" />
                    {competition}
                  </a>
                )}
              </p>
              <p className="col-3">{title}</p>
              <p className="col-3">{dateRange}</p>
            </div>
            <p className="col-1">{description}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CompetitionItem;
