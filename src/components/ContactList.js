import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactListItem from './ContactListItem';

const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={uuidv4()}
          id={id}
          name={name}
          number={number}
          onDeleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
