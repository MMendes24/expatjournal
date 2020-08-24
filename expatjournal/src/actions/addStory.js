export const ADD_STORY = 'ADD_STORY'

export const addStory = (newStory) => dispatch => {
    dispatch({type: ADD_STORY })
}