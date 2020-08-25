import axiosWithAuth from '../utils/axiosWithAuth'

export const registerAction = () => dispatch => {
    dispatch({type: START_REGISTRATION })
    axiosWithAuth()
    .post()
    .then()
    .catch()
}