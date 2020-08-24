import { FETCH_STORIES_START, FETCH_STORIES_SUCCESS, FETCH_STORIES_ERROR } from '../actions/getStories'

const initialState = {
    isLoading: false,
    stories: [],
    error: '',
}


const storyReducer = ( state = initialState, action ) => {
    switch(action.type){
        case FETCH_STORIES_START:
            return {
                ...state,
                isLoading: true,
                error: '',
            }
        case FETCH_STORIES_SUCCESS:
            return {
                ...state,
                stories: action.payload,
                isLoading: false,
                error: '',
            }
        case FETCH_STORIES_ERROR:
            return {
                ...state,
                stories: [],
                isLoading: false,
                error: action.payload
            }
        default: return state
    }
}
export default storyReducer
