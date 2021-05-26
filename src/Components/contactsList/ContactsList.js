import React from "react";
import { StyledContactsList } from "./StyledContactsList";
import { useDispatch, useSelector } from "react-redux";
import { deleteContactOperation } from "../../redux/contacts/operations";
import { getFilteredContacts } from "../../redux/contacts/selectors";

export default function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  const deleteContact = async e => {
    const { id } = e.target;
    dispatch(deleteContactOperation(id));
  };

  return (
    <StyledContactsList>
      <ul>
        {contacts.map(contact => (
          <li className="styled-contact-li" key={contact.id}>
            <p>{contact.name}:</p>
            <p>{contact.number}</p>
            <button type="button" onClick={deleteContact} id={contact.id}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </StyledContactsList>
  );
}
