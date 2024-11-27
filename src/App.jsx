import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

import defaultContacts from "../contacts.json";
import { filterContacts, updateConatcs } from "./helpers/contacts";

function App() {
  const [contacts, setContacts] = useState(
    updateConatcs(defaultContacts, true)
  );
  const handleChange = ({ target: { value } }) => {
    setContacts(filterContacts(contacts, value));
  };
  const addContact = (contact) => {
    const newContact = {
      id: `id-${contacts.length + 1}`,
      ...contact,
    };
    contacts.push(newContact);
    setContacts(contacts);
    console.log(contacts);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox handleChange={handleChange} />
      <ContactList contacts={contacts} />
    </>
  );
}

export default App;
