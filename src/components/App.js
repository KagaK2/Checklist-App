import React from "react";
import Checklist from "./Checklist";
import ChecklistForm from "./ChecklistForm";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.checkListForm = React.createRef();
    this.state = { checklists: [] };
  }

  renderCheckLists = (array, index) => {
    let checkList = array.map((obj, index) => {
      return (
        <div className="top aligned item" key={index}>
          <Checklist name={obj.name} items={obj.items} />
        </div>
      );
    });
    return <div className="ui big horizontal divided list">{checkList}</div>;
  };

  addChecklist = () => {
    this.checkListForm.current.turnDisplayOn();
  };

  formSubmit = (name, items) => {
    let newChecklists = this.state.checklists.concat({ name, items });
    this.setState({ checklists: newChecklists });
  };

  handleCheck = () => {};
  render() {
    return (
      <div className="ui container">
        <div>
          <button onClick={this.addChecklist}>Add new Checklist</button>
        </div>
        <div>
          <ChecklistForm
            ref={this.checkListForm}
            onSubmit={this.formSubmit}
            onCheck={this.handleCheck}
          />
        </div>
        {this.renderCheckLists(this.state.checklists)}
      </div>
    );
  }
}
