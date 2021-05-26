import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterContacts } from "../../redux/contacts/actions";
import { contactsFilter } from "../../redux/contacts/selectors";
import { StyledFilterContainer } from "./StyledContactsFilter";

export default function ContactsFilter() {
  const filter = useSelector(contactsFilter);
  const dispatch = useDispatch();
  const setFilter = event => {
    dispatch(filterContacts(event.target.value));
  };

  return (
    <StyledFilterContainer>
      <label>
        <h3>Find contacts by name</h3>
        <input
          className="filterInput"
          type="text"
          value={filter}
          onChange={setFilter}
          placeholder="who is your booty call for tonight? "
        />
      </label>
    </StyledFilterContainer>
  );
}
