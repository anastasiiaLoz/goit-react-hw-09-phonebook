import React, { Component } from "react";
import ContactsForm from "./Components/contactsForm/ContactsForm";
import ContactsList from "./Components/contactsList/ContactsList";
import ContactsSection from "./Components/contactsSection/ContactsSection";
import ContactsFilter from "./Components/contactsFilter/ContactsFilter";
import { connect } from "react-redux";
import { filterContacts } from "./redux/contacts/actions";
import { getFilteredContacts, contactsFilter } from "./redux/contacts/selectors";
import { addContactOperation, deleteContactOperation, getAllContactsOperation } from "./redux/contacts/operations";

class Contacts extends Component {
  async componentDidMount() {
    this.props.getAllContactsOperation();
  }

  addContact = async contact => {
    this.props.addContactOperation(contact);
  };

  setFilter = e => {
    const { value } = e.target;
    console.log(value);
    this.props.filterContacts(value);
  };

  render() {
    return (
      <>
        <ContactsSection title="Phonebook">
          <ContactsForm addContact={this.addContact} onCheckDuplicateName={this.onCheckDuplicateName} />
        </ContactsSection>

        <ContactsSection title="Contacts" styles="filterContainerStyle">
          <ContactsFilter filter={this.props.filter} setFilter={this.setFilter} />
        </ContactsSection>

        <ContactsSection>
          <ContactsList contacts={this.props.contacts} deleteContact={this.deleteContact} />
        </ContactsSection>
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: getFilteredContacts(state),
  filter: contactsFilter(state)
});

const mapDispatchToProps = {
  addContactOperation,
  deleteContactOperation,
  getAllContactsOperation,
  filterContacts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);
