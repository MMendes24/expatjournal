import axiosWithAuth from '../utils/axiosWithAuth'
export const LOGIN_START = 'LOGIN_START'

export const loginAction = () => dispatch => {
    dispatch({ LOGIN_START })
    axiosWithAuth()
    .post()
    .then()
    .catch()
}