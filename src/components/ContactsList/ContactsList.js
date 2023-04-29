import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactsListEl, ListItem, Button } from './ContactsList.styled';

export class ContactsList extends Component {
  render() {
    const { contacts, onClick } = this.props;

    return (
      <ContactsListEl>
        {contacts.map(({ name, id, number }) => (
          <ListItem key={id}>
            {name}: {number}
            <Button onClick={() => onClick(id)}>Delete</Button>
          </ListItem>
        ))}
      </ContactsListEl>
    );
  }
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
