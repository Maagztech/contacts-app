import { useEffect, useState } from "react";
import Contact from "./components/contact";
import { getAllContact, addContact, updateContact, deleteContact } from "./utils/handelApi";
function App() {

  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState();
  const [contact, setContact] = useState();
  const [isUpdating, setIsUpdating] = useState(false)
  const [contactId, setContactId] = useState()
  useEffect(() => {
    getAllContact(setContacts)
  }, [])

  const updateMode = (_id, name, contact) => {
    setIsUpdating(true);
    setName(name);
    setContact(contact);
    setContactId(_id);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Contacts</h1>
        <div className='top'>
          <input type='text'
            placeholder="Add name..."
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input type='Number'
            placeholder="Add contact Number..."
            value={contact}
            onChange={e => setContact(e.target.value)} />
          <div className="add"
            onClick={isUpdating ? () => updateContact(contactId, name, setName, contact, setContact, setContacts, setIsUpdating) : () => addContact(name, setName, contact, setContact, setContacts)}>
            {isUpdating ? "Update" : "Add"}</div>
        </div>
        <div className="list">
          {contacts.map((item) =>
            <Contact key={item._id}
              name={item.name}
              contact={item.contact}
              updateMode={() => updateMode(item._id, item.name, item.contact)}
              deleteMode={() => deleteContact(item._id, setContacts)} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
