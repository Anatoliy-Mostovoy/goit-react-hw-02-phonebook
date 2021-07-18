import React, { Component } from 'react';
import { Form } from './Components/Form/Form';
import { Contacts } from './Components/Contacts/Contacts';
import { Filter } from './Components/Filter/Filter';
// import s from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  getSubmitData = data => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, data] };
    });
  };

  changeFilterValue = event => {
    this.setState({ filter: event.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <h1>PhoneBook</h1>
        <Form submitMethod={this.getSubmitData} />
        <Contacts contacts={visibleContacts} />
        <Filter value={this.state.filter} onChange={this.changeFilterValue} />
      </>
    );
  }
}
