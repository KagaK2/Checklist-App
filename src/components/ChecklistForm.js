import React from "react";
import ReactDOM from "react-dom";
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
      return (
        <div
          className="item"
          key={index}
          onClick={() => this.deleteItem(index)}
        >
          {item.todo}
        </div>
      );
    });
    return <div className="ui list">{items}</div>;
  };

  deleteItem = index => {
    let items = this.state.items.filter((item, i) => !(index === i));
    console.log(items);
    this.setState({ items });
  };

  handleItemChange = e => {
    this.setState({ item: e.target.value });
  };
  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };
  addNewItem = () => {
    let newItems = this.state.items.concat({
      todo: this.state.item,
      checked: false
    });
    this.setState({ items: newItems, item: "" });
  };
  render() {
    if (this.state.display) {
      return ReactDOM.createPortal(
        <form className="ui container form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>CheckList Name</label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
              required
            />
          </div>
          <div className="field">{this.renderAllItems(this.state.items)}</div>
          <div className="field">
            <input
              type="text"
              value={this.state.item}
              onChange={this.handleItemChange}
            />
            <button type="button" onClick={this.addNewItem}>
              Add new item
            </button>
          </div>
          <input type="submit" value="Submit" />
        </form>,
        document.querySelector("#dialog")
      );
    }
    return null;
  }
}
