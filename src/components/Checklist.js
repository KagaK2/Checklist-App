import React from "react";

export default class Checklist extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <div>{this.renderItems(this.props.items)}</div>
      </div>
    );
  }
}
