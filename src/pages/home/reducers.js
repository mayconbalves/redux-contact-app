import {
  GET_REPOSITORY_ERROR,
  GET_REPOSITORY_SUCCESS
} from './actionTypes'

const initialState = {
  repositories: [],
  error: null
}

export default function(state = initialState, action) {
  switch (action) {
    case GET_REPOSITORY_SUCCESS:
      
    case GET_REPOSITORY_ERROR:
      
    default:
      return state
  }
}

