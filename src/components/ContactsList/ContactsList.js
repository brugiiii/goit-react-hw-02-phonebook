import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactsList extends Component {
  render() {
    const { contacts, onClick } = this.props;

    return (
      <ul>
        {contacts.map(({ name, id, number }) => (
          <li key={id}>
            {name}: {number}
            <button onClick={() => onClick(id)}>Delete</button>
          </li>
        ))}
      </ul>
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
