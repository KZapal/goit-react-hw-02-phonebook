import ContactListItem from './ContactListItem';
import css from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <div className={css.contactList}>
      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => (
          <ContactListItem key={id} name={name} number={number} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
