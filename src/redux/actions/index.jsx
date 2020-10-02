import { ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from '../constants';

export const addContact = (contact) => {
  const action = {
    type: ADD_CONTACT,
    payload: contact,
  };
  return action;
};

export const delContact = (name) => {
  const action = { type: DELETE_CONTACT, name };
  return action;
};
