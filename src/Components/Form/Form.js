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
      <div className="form container ">
        <div className="d-flex justify-content-center  ">
          <form className="container " onSubmit={this.handleSubmit}>
            <div className="row justify-content-center">
              <div className="col-12 row justify-content-center">
                <div className="col p-1 d-flex justify-content-center">
                  <input
                    className="noteContent text-center"
                    type="text"
                    name="noteContent"
                    placeholder="write your note"
                    value={this.state.noteContent}
                    onChange={this.HandleChange}
                  />
                </div>
                <div className="col p-1 d-flex justify-content-center">
                  <input
                    className="location text-center"
                    type="text"
                    name="location"
                    placeholder="location"
                    value={this.state.location}
                    onChange={this.HandleChange}
                  />
                </div>
              </div>
              <div className="col-8 text-center">
                <button type="submit" className="btn done p-2 my-2">
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(Form);
