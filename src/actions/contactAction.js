import * as actionTypes from './actionTypes';

export const createContact = contact => ({
  type: actionTypes.CREATE_NEW_CONTACT,
  contact: contact
})