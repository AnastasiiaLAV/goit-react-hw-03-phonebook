import React, {Component} from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./Form/Form";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

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
  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contactsLoc', JSON.stringify(nextContacts));
    }
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
