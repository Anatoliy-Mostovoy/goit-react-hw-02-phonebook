import React from 'react';
import s from './Contacts.module.css';
export const Contacts = ({ contacts }) => {
  return (
    <div>
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
