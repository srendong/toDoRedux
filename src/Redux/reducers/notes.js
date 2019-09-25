const defaultState = [
  {
    noteId: new Date().valueOf(),
    noteContent: "ejemplo",
    location: "medellin",
    favorite: true,
    editingMode: false,
    done: false
  }
];

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case "AddNote":
      return state.concat(payload);

    case "RemoveNote":
      return state.filter(note => note.noteId !== payload);

    case "AddToFavorites":
      return state.map(note =>
        note.noteId === payload ? { ...note, favorite: !note.favorite } : note
      );

    case "EditNote":
      return state.map(note =>
        note.noteId === payload ? { ...note, editMode: !note.editMode } : note
      );

    case "ChangeText":
      return state.map(note =>
        note.noteId === payload.id
          ? { ...note, [payload.e.target.name]: payload.e.target.value }
          : note
      );

    default:
      return state;
  }
};

export default reducer;

//reducer siemprerecibe como parametros el estado y la accion
// const reducer = (state, action}) => {
//   switch (action.type) {

//     case "xxxxx":
//       return state.concat(action.payload);

//   default:
//     return state;

// };
