import axiosWithAuth from "../utils/axiosWithAuth"

export const DELETE_REQUEST = "DELETE_REQUEST"
export const DELETE_SUCCESS = "DELETE_SUCCESS"
export const DELETE_FAIL = "DELETE_FAIL"

const deleteStory = () => dispatch => {
    dispatch({ type: DELETE_REQUEST })
    console.log("Dispatch before axiosWithAuth, editStoryActions")

    axiosWithAuth()
    .delete('https://reqres.in/api/users/1')
    .then(res => {
        console.log(res.data)
        dispatch({ type: DELETE_SUCCESS })
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: DELETE_FAIL, payload: "API call to edit failed within deleteStoryActions.js"})
    })
}

export default deleteStory