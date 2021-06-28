import React from 'react';
import { ImBin } from 'react-icons/im';

const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li>
      <span>{name}:</span> {number}
      <button type="button" onClick={() => onDeleteContact(id)}>
        <ImBin style={{ marginRight: 5 }} />
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
