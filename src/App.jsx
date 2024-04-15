import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import contactsUsers from "./ContactsUsers.json";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "./redux/contactsSlices";
import { deleteContact } from "./redux/contactsSlices";
import { changeFilter } from "./redux/filtersSlices";

function App() {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => {
    return state.contacts.items;
  });

  const filter = useSelector((state) => {
    return state.filters.name;
  });

  useEffect(() => {
    localStorage.setItem("ContactsUsers", JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = (formData) => {
    const finalContact = {
      ...formData,
      id: nanoid(),
    };
    const action = addContact(finalContact);

    dispatch(action);
  };

  const onDeleteContact = (contactId) => {
    const action = deleteContact(contactId);

    dispatch(action);
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox filter={filter} />
      <ContactList
        contactsUsers={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}

export default App;
