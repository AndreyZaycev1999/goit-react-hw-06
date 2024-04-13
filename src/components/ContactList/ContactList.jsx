import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contactsUsers, onDeleteContact }) => {
  return (
    <div>
      <ul className={css.contacts_list}>
        {Array.isArray(contactsUsers) &&
          contactsUsers.map((contactUser) => {
            return (
              <Contact
                key={contactUser.id}
                contactUser={contactUser}
                onDeleteContact={onDeleteContact}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default ContactList;
