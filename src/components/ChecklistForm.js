import React from "react";

export default class ChecklistForm extends React.Component {
  state = { display: false, name: "", item: "", items: [] };
  turnDisplayOn = () => {
    this.setState({ display: true });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.items);
    this.setState({ display: false, name: "", item: "", items: [] });
  };
  renderAllItems = array => {
    let items = array.map((item, index) => {
      return <li key={index}>{item}</li>;
    });
    return <ul>{items}</ul>;
  };
  handleItemChange = e => {
    this.setState({ item: e.target.value });
  };
  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };
  addNewItem = () => {
    let newItems = this.state.items.concat(this.state.item);
    this.setState({ items: newItems, item: "" });
  };
  render() {
    if (this.state.display) {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Checklist Name
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </label>
          <div>{this.renderAllItems(this.state.items)}</div>
          <input
            type="text"
            value={this.state.item}
            onChange={this.handleItemChange}
          />
          <button type="button" onClick={this.addNewItem}>
            Add new item
          </button>
          <input type="submit" value="Submit" />
        </form>
      );
    }
    return null;
  }
}
