import React from "react";

const Note = props => {
  //classNames
  const favorite = "material-icons col text-center  favorite ";
  const noFavorite = "material-icons col text-center  noFavorite ";
  const edit = "material-icons col text-center   edit ";
  const noEdit = "material-icons col text-center  noEdit ";
  const remove = "material-icons col text-center  remove";

  return (
    <div className="note  row  justify-content-center mb-3 mt-2 align-items-center">
      {props.note.editMode ? (
        <div className="col-12 col-md row justify-content-center align-items-center p-2">
          <div className="col-12 text-center">
            <input
              className="inputChange noteContentEdit"
              type="text"
              name="noteContent"
              value={props.note.noteContent}
              onChange={props.handlerChange}
            />
          </div>
          <div className="col text-center my-2">en</div>
          <div className="col-12 text-center">
            <input
              className="inputChange locationEdit"
              type="text"
              name="location"
              value={props.note.location}
              onChange={props.handlerChange}
            />
          </div>
        </div>
      ) : (
        <div className="col-12 col-md row justify-content-center align-items-center">
          <div className="col-12 text-center">
            <span className="noteText1 text-justify ">
              {props.note.noteContent}
            </span>
          </div>
          <div className="col text-center my-2">en</div>
          <div className="col-12 text-center">
            <span className="noteText2 text-center">{props.note.location}</span>
          </div>
        </div>
      )}
      <div className="col-12 col-md d-flex my-1 ">
        <i
          className={props.note.favorite ? favorite : noFavorite}
          onClick={props.changeFavorites}
        >
          favorite
        </i>
        <i className={remove} onClick={props.hanldeRemove}>
          delete
        </i>
        {props.note.editMode ? (
          <i className={edit} onClick={props.changeEditMode}>
            save
          </i>
        ) : (
          <i className={noEdit} onClick={props.changeEditMode}>
            edit
          </i>
        )}
      </div>
    </div>
  );
};

export default Note;
