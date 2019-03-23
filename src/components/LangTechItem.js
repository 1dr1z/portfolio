import React, { Component } from "react";

export class LangTechItem extends Component {
  render() {
    const { alt, img } = this.props.item;
    return (
      <React.Fragment>
          <div className="item-container-img">
            <img src={img} alt={alt} className="item-img" />
          </div>
      </React.Fragment>
    );
  }
}

export default LangTechItem;
