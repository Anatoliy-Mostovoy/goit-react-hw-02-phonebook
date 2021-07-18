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
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase(),
      )
    ) {
      alert('error');
      return;
    }

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
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilterValue} />
        <Contacts contacts={visibleContacts} />
      </>
    );
  }
}
