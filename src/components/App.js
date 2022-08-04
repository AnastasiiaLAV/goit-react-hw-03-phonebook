import React, {Component} from "react";
// import styled from 'styled-components';
import { nanoid } from 'nanoid';
import ContactForm from "./Form/Form";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

addContact = ({name, number}) => {
    const contact = {
      id: nanoid(5),
      name,
      number,
  };
  
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts ],
    }));
    
  }

  filterOnChange = (e) => {
console.log('e', e)
    this.setState({
      filter: e.target.value,
    })
  }

    getVisibleContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();    
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));
  };

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };


  render() {
    const { filter } = this.state;
    const { addContact, filterOnChange, deleteContact} = this;
    const visibleContacts = this.getVisibleContact();

    return (
      <div>
        <h1>Phonebook</h1>
  <ContactForm addContact={addContact}/>

  <h2>Contacts</h2>
  <Filter onChange={filterOnChange} value={filter}/>
  <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
      </div>
    )
  }
}


export default App;
