import React from "react";
import Checklist from "./Checklist";
import ChecklistForm from "./ChecklistForm";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.checkListForm = React.createRef();
    this.state = { checklists: [] };
  }

  addChecklist = () => {
    this.checkListForm.current.turnDisplayOn();
  };

  formSubmit = (name, items) => {
    let newChecklists = this.state.checklists.concat({ name, items });
    this.setState({ checklists: newChecklists });
  };
  render() {
    return (
      <div>
        <button onClick={this.addChecklist}>Add new Checklist</button>
        <ChecklistForm ref={this.checkListForm} onSubmit={this.formSubmit} />
        <Checklist />
      </div>
    );
  }
}
