import React, { Component } from "react";

import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

import { PhonebookApp, PhonebookTitle, ContactsTitle } from "./App.styled";



export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  addContact = (newContact) => {
    const duplicateName = this.state.contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase());

    if (duplicateName) {
      alert(`${newContact.name} is already in your contacts`);
      return;
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }))
  };

  onFilterChange = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilterResults = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  render() {
    const { filter } = this.state;
    const filterResults = this.getFilterResults();

    return (
      <PhonebookApp>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm onFormSubmit={this.addContact} />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter value={filter} onFilterChange={this.onFilterChange} />
        <ContactList contacts={filterResults} onDelete={this.deleteContact} />
      </PhonebookApp>
    )
  }
}
