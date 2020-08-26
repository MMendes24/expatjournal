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
        console.log(res.data.userId)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user_id', res.data.userId)
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.userId })
        
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: LOGIN_ERROR, payload: err})
    })
    
}