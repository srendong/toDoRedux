const defaultState = [];

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case "AddToFavorites": {
      return [...state, { id: 2, title: "hola" }];
    }
    default:
      return state;
  }
};

export default reducer;
