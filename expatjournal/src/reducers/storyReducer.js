import { FETCH_STORIES_START, FETCH_STORIES_SUCCESS, FETCH_STORIES_ERROR } from '../actions/getStories'
import { ADD_STORY_START, UPDATE_STORY_LIST, ADD_STORY_ERROR } from '../actions/addStoryAction'
import { EDIT_STORY, EDIT_SUCCESS, EDIT_FAIL } from '../actions/editStoryActions'
import { FETCH_SINGLE_STORY, FETCH_SINGLE_STORY_SUCCESS, FETCH_SINGLE_STORY_FAIL } from '../actions/getStoryActions'
import { REG_START, REG_SUCCESS, REG_ERROR } from '../actions/registerAction'
import { LOGIN_START, LOGIN_ERROR, LOGIN_SUCCESS } from '../actions/loginAction'
import { DELETE_REQUEST, DELETE_SUCCESS, DELETE_FAIL } from '../actions/deleteStoryActions'

const initialState = {
    isLoading: false,
    body: [],
    error: '',
    userId: '',
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
                body: action.payload,
                isLoading: false,
                error: '',
            }
        case FETCH_STORIES_ERROR:
            return {
                ...state,
                body: [],
                isLoading: false,
                error: action.payload
            }
        case ADD_STORY_START:
            return {
                ...state,
                isLoading: true,
                error: '',
            }
        case UPDATE_STORY_LIST:
            return {
                ...state,
                isLoading: false,
                body: [action.payload, ...state.body]
            }
        case ADD_STORY_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case EDIT_STORY:
            return {
                ...state,
                isLoading: true,
            }
        case EDIT_SUCCESS:
            return {
                ...state,
                body: action.payload,
                isLoading: false,
            }
        case EDIT_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case FETCH_SINGLE_STORY:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_SINGLE_STORY_SUCCESS:
            return {
                ...state,
                body: action.payload,
                isLoading: false,
            }
        case FETCH_SINGLE_STORY_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case REG_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case REG_SUCCESS:
            return {
                ...state,
                isLoading: false,
            }
        case REG_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case LOGIN_START:
            return {
                ...state,
                isLoading: true,
                error: '',
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                userId: action.payload
            }
        case LOGIN_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case DELETE_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case DELETE_SUCCESS:
            return {
                ...state,
                isLoading: false,
            }
        case DELETE_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default: return state
    }
}
export default storyReducer
