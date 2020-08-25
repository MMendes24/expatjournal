import { FETCH_STORIES_START, FETCH_STORIES_SUCCESS, FETCH_STORIES_ERROR } from '../actions/getStories'
import { EDIT_STORY, EDIT_SUCCESS, EDIT_FAIL } from '../actions/editStoryActions'

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
        case EDIT_STORY:
            return {
                ...state,
                stories: [],
                isLoading: true,
            }
        case EDIT_SUCCESS:
            return {
                ...state,
                stories: action.payload,
                isLoading: false,
            }
        case EDIT_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default: return state
    }
}
export default storyReducer
