import axios from "axios";
import { addContact, deleteContact, getAllContacts } from "../contacts/actions";

const addContactOperation = contact => async (dispatch, getState) => {
  try {
    const { data } = await axios.post(`https://bootycall-phonebook-default-rtdb.firebaseio.com/contacts.json`, contact);
    dispatch(addContact({ ...contact, id: data.name }));
  } catch (error) {}
};

const deleteContactOperation = id => async dispatch => {
  try {
    await axios.delete(`https://bootycall-phonebook-default-rtdb.firebaseio.com/contacts/${id}.json`);
    dispatch(deleteContact(id));
  } catch (error) {}
};

const getAllContactsOperation = contacts => async dispatch => {
  try {
    const { data } = await axios.get(`https://bootycall-phonebook-default-rtdb.firebaseio.com/contacts.json`);
    if (data) {
      const contacts = Object.keys(data).map(key => ({ id: key, ...data[key] }));
      dispatch(getAllContacts(contacts));
    }
  } catch (error) {}
};

export { addContactOperation, deleteContactOperation, getAllContactsOperation };
