import css from './ContactList.module.css';

const ContactListItem = ({ id, name, number, onClick }) => {
  return (
    <li className={css.item} key={id}>
      <div className={css.itemIn}>
        <span>
          {name}: {number}
        </span>
        <button onClick={onClick} className={css.btn}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default ContactListItem;
