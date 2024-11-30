import "./App.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { nanoid } from "nanoid";

import Container from "./components/Container/Container";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import Notification from "./components/Notification/Notification";

import { filterContacts, updateContacts } from "./helpers/contacts";
import { CONTACT_KEY } from "../contacts.config";

function App() {
  const [contacts, setContacts] = useState(updateContacts());
  const [savedContacts, setSavedContacts] = useState(contacts);

  const handleChange = ({ target: { value } }) => {
    setContacts(filterContacts(savedContacts, value));
  };

  const handleDelete = (contactId) => {
    const updatedContacts = savedContacts.filter(
      (contact) => contact.id != contactId
    );

    setSavedContacts(updatedContacts);
    toast.warn("Contact deleted!");
  };

  const addContact = (contact) => {
    if (contacts.find((c) => c.number === contact.number)) {
      toast.error("Number alredy exist in phonebook");
      return;
    }

    const newContact = {
      id: nanoid(),
      ...contact,
    };
    setSavedContacts((prevContacts) => [...prevContacts, newContact]);
    toast.info("Contact added");
  };

  useEffect(() => {
    setContacts(savedContacts);
    localStorage.setItem(CONTACT_KEY, JSON.stringify(savedContacts));
  }, [savedContacts]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox handleChange={handleChange} />
      {contacts.length > 0 ? (
        <ContactList contacts={contacts} onDelete={handleDelete} />
      ) : (
        <Notification />
      )}
      <ToastContainer />
    </Container>
  );
}

export default App;
