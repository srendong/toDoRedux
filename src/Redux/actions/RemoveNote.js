export const type = "RemoveNote";

const RemoveNote = id => {
  return {
    type,
    payload: id
  };
};
export default RemoveNote;
