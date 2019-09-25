import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

const Details = props => {
  const id = parseInt(props.match.params.itemId);
  const note = props.notes.find(n => n.noteId === id);
  return (
    <div>
      <p>hola{`${note.noteId}`}</p>
      <Link to="/">
        {" "}
        <button>Back</button>{" "}
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default withRouter(connect(mapStateToProps)(Details));
