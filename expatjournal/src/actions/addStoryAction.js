import axiosWithAuth from '../utils/axiosWithAuth'
export const ADD_STORY_START = 'ADD_STORY'
export const UPDATE_STORY_LIST = 'UPDATE_STORY_LIST'
export const ADD_STORY_ERROR = 'ADD_STORY_ERROR'

export const addStoryAction = (newStory) => dispatch => {
    dispatch({type: ADD_STORY_START })
    axiosWithAuth()
    .post('https://reqres.in/api/users', newStory)
    .then(res => {
        console.log(res)
        dispatch({type: UPDATE_STORY_LIST, payload: res.data[0]})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: ADD_STORY_ERROR, payload: err})
    })
    
}