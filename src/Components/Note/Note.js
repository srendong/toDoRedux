import React from "react";
import { Link } from "react-router-dom";

const Note = props => {
  //classNames
  const favorite = "material-icons col-2 favorite mr-3";
  const noFavorite = "material-icons col-2 noFavorite mr-3";
  const edit = "material-icons col-2 edit mr-3";
  const noEdit = "material-icons col-2 noEdit mr-3";
  const remove = "material-icons col-2 remove";
  const detail = "material-icons col-2 detail"
  

  return (
    <div className="note row container  d-flex justify-content-between mb-3 mt-2 align-items-center">
      {props.note.editMode ? (
        <div className="col-8 ">
          <p>
            <input
              className="inputChange noteContentEdit mr-3"
              type="text"
              name="noteContent"
              value={props.note.noteContent}
              onChange={props.handlerChange}
            />
            en
            <input
              className="inputChange locationEdit ml-3"
              type="text"
              name="location"
              value={props.note.location}
              onChange={props.handlerChange}
            />
          </p>
        </div>
      ) : (
        <div className="col-8 ">
          <p className="">
            <span className="noteText1 mr-3">{props.note.noteContent}</span>en
            <span className="noteText2 ml-3">{props.note.location}</span>
          </p>
        </div>
      )}
      <div className="col-4 ">
        <i
          className={props.note.favorite ? favorite : noFavorite}
          onClick={props.changeFavorites}
        >
          favorite
        </i>
        <i className={remove} onClick={props.hanldeRemove}>
          delete
        </i>
{props.note.editMode ? <i
          className={edit}
          onClick={props.changeEditMode}
        > save </i>: <i
          className={noEdit}
          onClick={props.changeEditMode}
        > edit </i>}
        <Link to={`/details/${props.note.noteId}`}>
          <i className={detail}>location_searching</i>
        </Link>
      </div>
    </div>
  );
};

export default Note;
