import css from './ContactItem.module.css';

const ContactItem = ({contact, onDeleteContact}) => {
    return (
        <li className={css.item}>
            <span className={css.name}>{contact.name}: </span>
            <a href={`tel:${contact.number}`} className={css.number}>
                {contact.number}
            </a>
            <button
                className={css.button}
                type="button"
                onClick={() => onDeleteContact(contact.id)}>
                Delete
            </button>
        </li>
    )
}

export default ContactItem;