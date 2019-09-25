import React from "react";
import { connect } from "react-redux";
import Note from "../Note/Note";
import Form from "../Form/Form";
import RemoveNote from "../../Redux/actions/RemoveNote";
import AddToFavorites from "../../Redux/actions/AddToFavorites";
import EditNote from "../../Redux/actions/EditNote";
import ChangeText from "../../Redux/actions/ChangeText";
import { Link } from "react-router-dom";

const Notes = props => {
  const hanldeRemove = id => {
    props.dispatch(RemoveNote(id));
  };

  const changeFavorites = id => {
    props.dispatch(AddToFavorites(id));
  };

  const changeEditMode = id => {
    props.dispatch(EditNote(id));
  };

  const handlerChange = (id, e) => {
    props.dispatch(ChangeText(id, e));
  };

  return (
    <div className="notesContainer container-fluid">
      <h1 className="notesHeader ">Take Note</h1>
      <Form />
      <Link to="/favorites">
        <p className="subtitle text-center">Go to Favorites </p>
      </Link>
      <div className="notesBody d-flex flex-column justify-content-center align-items-center ">
        {props.notes.map(note => (
          <div className="w-75">
            <Note
              key={note.noteId}
              note={note}
              hanldeRemove={() => hanldeRemove(note.noteId)}
              changeFavorites={() => changeFavorites(note.noteId)}
              changeEditMode={() => changeEditMode(note.noteId)}
              handlerChange={e => handlerChange(note.noteId, e)}
            />
          </div>
        ))}
      </div>
      <div className="notesFooter" />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps)(Notes);
