import React from 'react';
import s from './Contacts.module.css';
export const Contacts = ({ contacts }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => {
          return (
            <li className={s.list} key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
