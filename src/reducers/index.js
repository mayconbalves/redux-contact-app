import { combineReducers } from 'redux'
import contacts from './contactReducer'

const rootReducer = combineReducers({
  contacts: contacts
})

export default rootReducer