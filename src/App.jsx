import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import contactsUsers from "./ContactsUsers.json";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContactUsers = localStorage.getItem("ContactsUsers");
    if (!stringifiedContactUsers) return contactsUsers.contactsUsers;

    const parsedContactUsers = JSON.parse(stringifiedContactUsers);
    return parsedContactUsers;
  });

  useEffect(() => {
    localStorage.setItem("ContactsUsers", JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = (formData) => {
    const finalContact = {
      ...formData,
      id: nanoid(),
    };

    setContacts((prevState) => [...prevState, finalContact]);
  };

  const onDeleteContact = (contactId) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== contactId)
    );
  };

  const [filter, setFilter] = useState("");

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox filter={filter} setFilter={setFilter} />
      <ContactList
        contactsUsers={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}

export default App;
