import {
  GET_REPOSITORY_ERROR,
  GET_REPOSITORY_SUCCESS
} from './actionTypes'

const initialState = {
  repositories: [],
  error: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_REPOSITORY_SUCCESS:
      return {
        ...state,
        repositories: action.payload,
        error: null
      }
    case GET_REPOSITORY_ERROR:
      return {
        ...state,
        repositories: [],
        error: action.payload
      }
    default:
      return state
  }
}

