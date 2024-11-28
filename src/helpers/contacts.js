import { CONTACT_KEY } from "../../contacts.config";

export function filterContacts(contacts, value) {
  // if (!localStorage.getItem(CONTACT_KEY)) return;
  // const contacts = JSON.parse(localStorage.getItem(CONTACT_KEY));
  const validValue = value.trim().toLowerCase();
  if (validValue === "") return contacts;
  return contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(validValue) ||
      contact.number.toLowerCase().includes(validValue)
  );
}

export function updateContacts(contacts, init = false) {
  if (init && localStorage.getItem(CONTACT_KEY)) {
    return JSON.parse(localStorage.getItem(CONTACT_KEY));
  }
  localStorage.setItem(CONTACT_KEY, JSON.stringify(contacts));
  return contacts;
}
