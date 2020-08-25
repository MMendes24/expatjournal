import axiosWithAuth from '../utils/axiosWithAuth'
export const LOGIN_START = 'LOGIN_START'

export const loginAction = (loginValues) => dispatch => {
    dispatch({ LOGIN_START })
    axiosWithAuth()
    .post('/api/auth/login', loginValues)
    .then(res => {
        console.log(res)
    })
    .catch(err => console.log(err))
}