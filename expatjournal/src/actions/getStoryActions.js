// import axiosWithAuth from '../utils/axiosWithAuth'
import Axios from 'axios'

export const FETCH_SINGLE_STORY = "FETCH_SINGLE_STORY"
export const FETCH_SINGLE_STORY_SUCCESS = "FETCH_SINGLE_STORY_SUCCESS"
export const FETCH_SINGLE_STORY_FAIL = "FETCH_SINGLE_STORY_FAIL"

const fetchSingleStory = () => (dispatch) => {
    dispatch({ type: FETCH_SINGLE_STORY })

    Axios
    .get('https://reqres.in/api/users/1')
    .then(res => {
        console.log(res.data)
        dispatch({ type: FETCH_SINGLE_STORY_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: FETCH_SINGLE_STORY_FAIL, payload: "Failure to fetch a story within getStoryActions."})
    })
}

export default fetchSingleStory