import axiosWithAuth from '../utils/axiosWithAuth'
export const FETCH_STORIES_START = 'FETCH_STORIES_START'
export const FETCH_STORIES_SUCCESS = 'FETCH_STORIES_SUCCESS'
export const FETCH_STORIES_ERROR = 'FETCH_STORIES_ERROR'

export const getStories = (userId) => dispatch => {
    dispatch({type: FETCH_STORIES_START })
    axiosWithAuth()
    .get(`/api/stories`)
    .then(res => {
        console.log(res)
        dispatch({type: FETCH_STORIES_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: FETCH_STORIES_ERROR, payload: err})
    })
}