import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './ContactList.styled';

const ContactList = ({contacts, onDeleteContact}) => {
    return (
        <ol>
        {contacts.map(({ id, name, number }) => 
            (<li key={id}>
                <p>{name}</p>
                <p>{number}</p>
                <Button type='button' onClick={() => onDeleteContact(id)}>Delete</Button>
            </li>)
            
        )
        }
        </ol>
    )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.exact({
    id:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number:PropTypes.string.isRequired
    })),
  onDeleteContact:PropTypes.func.isRequired
}

export default ContactList;