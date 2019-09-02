import React, { Component } from "react";
import AddNote from "../../Redux/actions/AddNote";
import { connect } from "react-redux";

class Form extends Component {
  state = {
    noteContent: "",
    location: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const noteContent = this.state.noteContent;
    const location = this.state.location;

    const data = {
      noteId: new Date().valueOf(),
      noteContent,
      location,
      favorite: false,
      editMode: false,
      done: false
    };
    if (this.state.location.length > 0 && this.state.noteContent.length > 0) {
      this.props.dispatch(AddNote(data));
    } else if (this.state.noteContent.length === 0) {
      alert("Please enter your note content");
    } else if (this.state.location.length === 0) {
      alert("Please enter a location");
    }
    this.setState({
      noteContent: "",
      location: ""
    });
  };

  HandleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className=" container-fluid  form ">
        <div className="row justify-content-center  ">
          <form className="" onSubmit={this.handleSubmit}>
            <input
              className="noteContent m-3 p-1"
              type="text"
              name="noteContent"
              placeholder="write your note"
              value={this.state.noteContent}
              onChange={this.HandleChange}
            />
            <input
              className="location m-3 p-1"
              type="text"
              name="location"
              placeholder="location"
              value={this.state.location}
              onChange={this.HandleChange}
            />
            <button type="submit" className="done ">
              <i className="material-icons chulo ">done</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(Form);
