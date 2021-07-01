import {
  GET_REPOSITORY_ERROR,
  GET_REPOSITORY_SUCCESS
} from './actionTypes'
import api from 'service/api'

const getRepositorySuccess = data => {
  return {

  }
}

const getRepositoryError = error => {
  return {

  }
}

export const fetchRepositories = user => dispatch => {
  api.get(`/${user}/repos?per_page=50`)
    .then(resp => dispatch(getRepositorySuccess(resp)))
    .catch(err => dispatch(getRepositoryError(err)))
}