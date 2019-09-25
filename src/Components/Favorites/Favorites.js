import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AddToFavorites from "../../Redux/actions/AddToFavorites";

const Favorites = props => {
  const RemoveFavorites = id => {
    props.dispatch(AddToFavorites(id));
  };
  return (
    <div className="container favorites ">
      <div className="d-flex justify-content-center pt-5">
        <h2 className="title">Favorites</h2>
      </div>
      <div className="d-flex justify-content-center mb-3 ">
        <Link to="/">
          <button className="home px-2">Home</button>
        </Link>
      </div>
      <div className="row justify-content-center">
        {props.notes.map(note =>
          note.favorite === true ? (
            <div
              className="col-12 note d-flex justify-content-between mb-4 align-items-center pt-1"
              key={note.noteId}
            >
              <h2 className="noteContent">{note.noteContent}</h2>
              <button onClick={() => RemoveFavorites(note.noteId)}>
                <i class="material-icons">delete</i>
              </button>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps)(Favorites);
