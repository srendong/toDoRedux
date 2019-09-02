import React from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom"
import AddToFavorites from "../../Redux/actions/AddToFavorites";

const Favorites = props => {

  const RemoveFavorites =(id)=>{
    props.dispatch(AddToFavorites(id))
  }
  return (
    <div className="container favorites ">
    <div className="row justify-content-center p-5">
      <h2 className="title">Favorites</h2>
    </div>
    <div className="row justify-content-center p-5">
      <Link to="/" ><button>Home</button></Link>
    </div>
      {props.notes.map(note =>
        note.favorite === true ? (
          <div className="row justify-content-center border col-12 mb-4 d-flex justify-content-between" key={note.noteId}>
          <h2 className="noteContent">{note.noteContent}</h2>
          <button onClick={()=>RemoveFavorites(note.noteId)}>Remove from favorites</button>
          </div>
        ) : null
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps)(Favorites);
