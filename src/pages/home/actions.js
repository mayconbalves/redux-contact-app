import {
  GET_REPOSITORY_ERROR,
  GET_REPOSITORY_SUCCESS
} from './actionTypes'
import api from 'service/api'

const getRepositorySuccess = data => {
  return {
    type: GET_REPOSITORY_SUCCESS,
    payload: data
  }
}

const getRepositoryError = error => {
  return {
    type: GET_REPOSITORY_ERROR,
    payload: error
  }
}

export const fetchRepositories = user => dispatch => {
  api.get(`/${user}/repos?per_page=20`)
    .then(resp => dispatch(getRepositorySuccess(resp.data)))
    .catch(err => dispatch(getRepositoryError(err)))
}