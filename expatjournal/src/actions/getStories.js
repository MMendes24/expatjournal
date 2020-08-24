
export const FETCH_STORIES_START = 'FETCH_STORIES_START'

export const getStories = () => dispatch => {
    dispatch({type: FETCH_STORIES_START })
}