import { CONTACT_KEY } from "../../contacts.config";
import defaultContacts from "../../contacts.json";

export function filterContacts(contacts, value) {
  const validValue = value.trim().toLowerCase();
  if (validValue === "") return contacts;
  return contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(validValue) ||
      contact.number.toLowerCase().includes(validValue)
  );
}

export function updateContacts() {
  if (localStorage.getItem(CONTACT_KEY)) {
    return JSON.parse(localStorage.getItem(CONTACT_KEY));
  }

  localStorage.setItem(CONTACT_KEY, JSON.stringify(defaultContacts));
  return defaultContacts;
}
