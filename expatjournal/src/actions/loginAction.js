import axiosWithAuth from '../utils/axiosWithAuth'
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const loginAction = (loginValues) => dispatch => {
    dispatch({ type: LOGIN_START })
    axiosWithAuth()
    .post('/api/auth/login', loginValues)
    .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.token)
        dispatch({ type: LOGIN_SUCCESS })
        
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: LOGIN_ERROR, payload: err})
    })
}