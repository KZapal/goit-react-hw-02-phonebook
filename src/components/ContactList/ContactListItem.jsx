import css from './ContactList.module.css';

const ContactListItem = ({ id, name, number }) => {
  return (
    <li className={css.item} key={id}>
      {name}: {number}
    </li>
  );
};

export default ContactListItem;
