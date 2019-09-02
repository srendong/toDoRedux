export const type = "EditNote";

const EditNote = id => {
  return { type, payload: id };
};

export default EditNote;
