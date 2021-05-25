import {
  CONTACT_GET_LIST,
  CONTACT_ADD,
  CONTACT_DELETE,
  CONTACT_GET,
  CONTACT_UPDATE,
} from "../actions/types";

const initialState = {
  contacts: [],
  contact: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CONTACT_GET_LIST:
      return {
        ...state,
        contacts: action.payload,
      };
    case CONTACT_GET:
      return {
        ...state,
        contact: action.payload,
      };
    case CONTACT_ADD:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case CONTACT_UPDATE:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? (contact = action.payload) : contact
        ),
      };
    case CONTACT_DELETE:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== action.payload),
      };
    default:
      return state;
  }
}
