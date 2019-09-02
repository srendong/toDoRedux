export const type = "RemoveFromFavorites"

const RemoveFromFavorites = id =>{
    return {
        type,
        payload: id
    }
}
export default RemoveFromFavorites;