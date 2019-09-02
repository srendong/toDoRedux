export const type = "AddToFavorites";

const AddToFavorites = id => {
  return {
    type,
    payload: id
  };
};

export default AddToFavorites;
