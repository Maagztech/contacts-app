import axios from "axios";

const baseURL = "http://localhost:8000";

const getAllContact = (setContacts) => {
    axios
        .get(baseURL)
        .then(({ data }) => {
            console.log('data--->', data)
            setContacts(data)
        })
}

const addContact = (name, setName, contact, setContact, setContacts) => {
    axios.post(`${baseURL}/save`, { name, contact })
        .then((data) => {
            console.log(data);
            setName("");
            setContact("");
            getAllContact(setContacts);
        })
        .catch(err => console.log(err))
}

const updateContact = (contactID, name, setName, contact, setContact, setContacts, setIsUpdating) => {
    axios.patch(`${baseURL}/edit`, { _id: contactID, name, contact })
        .then((data) => {
            console.log(data);
            setName("");
            setContact("");
            setIsUpdating(false);
            getAllContact(setContacts);
        })
        .catch(err => console.log(err))
}


const deleteContact = (_id, setContacts) => {
    console.log(_id)
    axios.post(`${baseURL}/delete`, { _id })
        .then((data) => {
            console.log(data);
            getAllContact(setContacts);
        })
        .catch(err => console.log(err))
}
export { getAllContact, addContact, updateContact, deleteContact }