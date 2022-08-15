import React, {Component} from "react";
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import ContactForm from "./Form/Form";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { Wrapper } from "./App.styled";
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() {
    const contactsLoc = localStorage.getItem('contactsLoc');
    const parsContacts = JSON.parse(contactsLoc);
    if (parsContacts) {
      this.setState({ contacts: parsContacts });
    }
  }
  componentDidUpdate(_, prevState) {
    console.log('App componentDidUpdate');
    
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;


    // console.log('nextContacts:', ...nextContacts);
    // console.log('prevContacts:', prevContacts);

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contactsLoc', JSON.stringify(nextContacts));
    }
  }

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(5),
      name,
      number,
    };

    const sameСontacts = this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase() || contact.number === number);

    if (sameСontacts) {
      Notify.warning('This contact already exists');
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts ],
    }));
  }

  filterOnChange = (e) => {
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
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact}/>

        <h2>Contacts</h2>
        <Filter onChange={filterOnChange} value={filter}/>
        <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
      </Wrapper>
    )
  }
}

export default App;
