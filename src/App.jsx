import { useEffect, useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

import defaultContacts from "../contacts.json";
import { filterContacts, updateContacts } from "./helpers/contacts";
import { CONTACT_KEY } from "../contacts.config";

function App() {
  const [contacts, setContacts] = useState(
    updateContacts(defaultContacts, true)
  );
  const handleChange = ({ target: { value } }) => {
    setContacts(filterContacts(value));
  };

  const handleDelete = (contactId) => {
    const newContacts = contacts.filter((contact) => contact.id != contactId);
    localStorage.setItem(CONTACT_KEY, JSON.stringify(newContacts));
    setContacts(newContacts);
  };

  const addContact = (contact) => {
    const newContact = {
      id: `id-${contacts.length + 1}`,
      ...contact,
    };
    contacts.push(newContact);
    localStorage.setItem(CONTACT_KEY, JSON.stringify(contacts));
    setContacts(contacts);
    console.log(contacts);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox handleChange={handleChange} />
      <ContactList contacts={contacts} onDelete={handleDelete} />
    </>
  );
}

export default App;
