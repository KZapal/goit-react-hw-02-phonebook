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

  formatPhoneNumber = number => {
    const cleaned = ('' + number).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{2})(\d{2})$/);
    if (match) {
      return match[1] + '-' + match[2] + '-' + match[3];
    }
    return null;
  };

  handleSubmit = event => {
    event.preventDefault();
    const contactIn = this.state.contacts.find(
      contact => contact.name.toLowerCase() === this.state.name.toLowerCase()
    );
    if (contactIn) {
      alert('This contact already is in contacts.');
    } else {
      let newContact = {
        id: nanoid(),
        name: this.state.name,
        number: this.formatPhoneNumber(this.state.number),
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
    this.setState(prevState => ({
      ...prevState,
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <div className={css.mainBlock}>
        <h2 className={css.header}>Phone Book</h2>
        <ContactForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        <h2 className={css.header}>Contacts</h2>

        <Filter value={this.state.filter} onChange={this.handleChange} />
        <ContactList contacts={this.filterList()} onFilter={this.onDelete} />
      </div>
    );
  }
}

export default App;
