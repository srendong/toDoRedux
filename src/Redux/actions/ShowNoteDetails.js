export const type = "ShowNoteDetails"

const ShowNoteDetails = id =>{
    return {
        type,
        payload: id
    }
}

export default ShowNoteDetails;