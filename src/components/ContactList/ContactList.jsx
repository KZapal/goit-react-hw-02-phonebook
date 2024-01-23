import React from 'react';
import ContactListItem from './ContactListItem';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: this.props.contacts,
    };
  }

  delete = id => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts.filter(contact => contact.id !== id)],
    }));
  };

  render() {
    const { contacts } = this.props;
    return (
      <div className={css.contactList}>
        <ul className={css.list}>
          {contacts.map(({ id, name, number }) => (
            <ContactListItem
              key={id}
              name={name}
              number={number}
              onClick={() => this.delete(id)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default ContactList;
