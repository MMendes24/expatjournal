import axiosWithAuth from '../utils/axiosWithAuth'
export const REG_START = 'REG_START'
export const REG_SUCCESS ='REG_SUCCESS'
export const REG_ERROR ='REG_ERROR'

export const registerAction = (newUser) => dispatch => {
    dispatch({type: REG_START })
    axiosWithAuth()
    .post('/api/auth/register', newUser)
    .then(res => {
        console.log(res)
        dispatch({ type:REG_SUCCESS })
    })
    .catch(err => {
        console.log(err)
        dispatch({type: REG_ERROR, payload: err})
    })
}