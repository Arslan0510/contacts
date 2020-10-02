import { ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from '../constants';

const contact = (action) => {
  return {
    name: action.payload.name,
    email: action.payload.email,
    city: action.payload.city,
    country: action.payload.country,
    pic: action.payload.pic,
    modifiedDate: action.payload.modifiedDate,
    createdDate: action.payload.createdDate,
  };
};

const removeByName = (state = [], name) => {
  const person = state.filter((person) => person.name !== name);
  return person;
};

const contactData = (state = [], action) => {
  let contactData = null;
  switch (action.type) {
    case ADD_CONTACT:
      let index = state.findIndex((el) => el.name === action.name);
      if (index === -1) {
        contactData = [...state, contact(action)];
        return contactData;
      }
      return state;

    case UPDATE_CONTACT:
      break;

    case DELETE_CONTACT:
      contactData = removeByName(state, action.name);
      return contactData;

    default:
      return state;
  }
};

export default contactData;
