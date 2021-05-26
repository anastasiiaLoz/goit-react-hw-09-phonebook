import { StyledContactsForm } from "./StyledContactsForm.js";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContactOperation } from "../../redux/contacts/operations";
import { getContactsSelector } from "../../redux/contacts/selectors";

const initialState = {
  contacts: [],
  name: "",
  filter: "",
  number: ""
};

export default function ContactsForm() {
  const contacts = useSelector(getContactsSelector);
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  const onCheckDuplicateName = name => {
    return contacts.some(contact => contact.name === name);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    if (onCheckDuplicateName(state.name)) {
      alert(`${state.name} is already in contacts.`);
      return;
    }
    dispatch(addContactOperation(state));
    setState(initialState);
  };

  const onHandleChange = e => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <StyledContactsForm onSubmit={onHandleSubmit}>
      <label>
        Name
        <input
          placeholder="what's his/her name?"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={onHandleChange}
          value={state.name}
        />
      </label>
      <label>
        Number
        <input
          placeholder="gimme their number, hun;)"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={onHandleChange}
          value={state.number}
        />
      </label>
      <button type="submit">Add Contact</button>
    </StyledContactsForm>
  );
}
