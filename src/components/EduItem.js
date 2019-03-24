import React, { Component } from "react";

export class EduItem extends Component {
  render() {
    const { city, school, dateRange, description } = this.props.item;
    return (
      <div className="container">
        <div className="item-card">
          <div className="title-row clearfix">
            <p className="col-3">{city}</p>
            <p className="col-3">{school}</p>
            <p className="col-3">{dateRange}</p>
          </div>
          <p className="col-1">{description}</p>
        </div>
      </div>
    );
  }
}

export default EduItem;
