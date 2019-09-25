export const type = "ChangeText";

const ChangeText = (id, e) => {
  return {
    type,
    payload: { id, e }
  };
};

export default ChangeText;
