import React, { Component } from "react";

export class PersonalSkillItem extends Component {
  render() {
    const { language, understanding, speaking, writing } = this.props.lang;
    return (
      <div className="container">
      <div className="item-card">
        <table>
          <thead>
          <tr>
            <td colSpan="3">{language}</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Understanding</td>
            <td>Speaking</td>
            <td>Writing</td>
          </tr>
          <tr>
            <td>{understanding}</td>
            <td>{speaking}</td>
            <td>{writing}</td>
          </tr>
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}

export default PersonalSkillItem;
