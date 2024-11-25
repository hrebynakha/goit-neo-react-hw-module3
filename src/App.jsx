import "./App.css";
import contacts from "../contacts.json";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
console.log(contacts);

function App() {
  return (
    <>
      <SearchBox />
      <ContactList contacts={contacts} />
    </>
  );
}

export default App;
