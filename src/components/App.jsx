import React from 'react';
// import Form from './Form/Form';
import { nanoid } from 'nanoid';
import ContactForm from './Form/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const contactIn = this.state.contacts.find(
      contact => contact.name.toLowerCase() === this.state.name.toLowerCase()
    );
    if (contactIn) {
      alert('This contact already exists in the phone book.');
    } else {
      let newContact = {
        id: nanoid(),
        name: this.state.name,
        number: this.state.number,
      };
      this.setState({ contacts: [...this.state.contacts, newContact] });
    }
  };

  filterList = () => {
    const filter = this.state.filter.toLowerCase();
    const filteredList = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
    return filteredList;
  };

  onDelete = id => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts.filter(contact => contact.id !== id)],
    }));
  };

  render() {
    return (
      <div className={css.mainBlock}>
        <h2 className={css.header}>Phone Book</h2>
        <ContactForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          // name={this.state.name}
          // number={this.state.number}
        />
        <h2 className={css.header}>Contacts</h2>
        Find contacts by name
        <Filter value={this.state.filter} onChange={this.handleChange} />
        <ContactList contacts={this.filterList()} />
      </div>
    );
  }
}

export default App;
