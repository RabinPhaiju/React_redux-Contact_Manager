import axios from "axios";
import {
  CONTACT_GET_LIST,
  CONTACT_ADD,
  CONTACT_DELETE,
  CONTACT_GET,
  CONTACT_UPDATE,
} from "./types";

export const getContacts = () => async (dispatch) => {
  const res = await axios.get("http://localhost:3004/contacts");
  dispatch({
    type: CONTACT_GET_LIST,
    payload: res.data,
  });
};
export const addContact = (contact) => async (dispatch) => {
  const res = await axios.post("http://localhost:3004/contacts", contact);
  dispatch({
    type: CONTACT_ADD,
    payload: await res.data,
  });
};
export const deleteContact = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:3004/contacts/${id}`);
  dispatch({
    type: CONTACT_DELETE,
    payload: id,
  });
};
export const getContact = (id) => async (dispatch) => {
  const res = await axios.get(`http://localhost:3004/contacts/${id}`);
  dispatch({
    type: CONTACT_GET,
    payload: res.data,
  });
};
export const updateContact = (id, contact) => async (dispatch) => {
  const res = await axios.put(`http://localhost:3004/contacts/${id}`, contact);
  dispatch({
    type: CONTACT_UPDATE,
    payload: res.data,
  });
};
