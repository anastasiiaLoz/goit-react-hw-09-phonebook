import { addContact, deleteContact, getAllContacts, filterContacts } from "../contacts/actions";
import { combineReducers, createReducer } from "@reduxjs/toolkit";

const items = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) => [...state.filter(contact => contact.id !== payload)],
  [getAllContacts]: (_, { payload }) => payload
});

const filter = createReducer("", {
  [filterContacts]: (_, { payload }) => payload
});

const contacts = combineReducers({ items, filter });

export default contacts;
