import { createSelector } from "@reduxjs/toolkit";

const getContactsSelector = state => state.contacts.items;
const contactsFilter = state => state.contacts.filter;

// export const getPostsWithTags = createSelector(
//   [getContactsSelector, contactsFilter],
//   (contacts, filter) => contacts.filter(contact => contact.clientName.includes(filter))
// );

export const getFilteredContacts = createSelector(
  [getContactsSelector, contactsFilter],
  (contacts, filter) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }
);

export { getContactsSelector, contactsFilter };
