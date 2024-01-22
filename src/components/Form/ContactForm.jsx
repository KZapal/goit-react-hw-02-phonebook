import React from 'react';
import css from './ContactForm.module.css';

class ContactForm extends React.Component {
  render() {
    return (
      <form className={css.form} onSubmit={this.props.onSubmit}>
        <input
          className={css.formInput}
          type="text"
          name="name"
          value={this.props.name}
          onChange={this.props.onChange}
          placeholder="Name: full name"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <input
          className={css.formInput}
          type="tel"
          name="number"
          value={this.props.number}
          onChange={this.props.onChange}
          placeholder="Phone number: xxx-xx-xx"
          pattern="[0-9]{7}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
