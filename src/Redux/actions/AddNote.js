export const type = "AddNote"

const AddNote = data =>{
    return {
        type,
        payload: data
    }
}

export default AddNote;