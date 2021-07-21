import React, { Component } from 'react';
import { Form } from './Components/Form/Form';
import { Contacts } from './Components/Contacts/Contacts';
import { Filter } from './Components/Filter/Filter';
import s from './App.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      toast.error('This name is also here!');
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

  handelDelete = data => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== data),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <h1 className={s.Title}>PhoneBook</h1>
        <Form submitMethod={this.getSubmitData} />
        <h2 className={s.Title}>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilterValue} />
        <Contacts
          contacts={visibleContacts}
          deleteFunction={this.handelDelete}
        />
        <ToastContainer />
      </>
    );
  }
}
