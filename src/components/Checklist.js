import React from "react";

export default class Checklist extends React.Component {
  renderItems = array => {
    let checkBoxList = array.map((item, index) => {
      return (
        <div className="ui checkbox item" key={index}>
          <input type="checkbox" defaultunchecked="true" />
          <label>{item.todo}</label>
        </div>
      );
    });
    return <div className="ui list">{checkBoxList}</div>;
  };

  onCheck = e => {};

  render() {
    if (this.props.name && this.props.items) {
      return (
        <div>
          <h2>{this.props.name}</h2>
          <div>{this.renderItems(this.props.items)}</div>
        </div>
      );
    }
    return null;
  }
}
