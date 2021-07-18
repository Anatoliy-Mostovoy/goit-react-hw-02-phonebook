import React, { Component } from 'react';
import { Form } from './Components/Form/Form';
import { Contacts } from './Components/Contacts/Contacts';
// import s from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
  };

  getSubmitData = data => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, data] };
    });
  };

  render() {
    return (
      <>
        <h1>PhoneBook</h1>
        <Form submitMethod={this.getSubmitData} />
        <Contacts contacts={this.state.contacts} />
      </>
    );
  }
}
