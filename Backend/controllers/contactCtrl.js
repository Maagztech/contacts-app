const { response } = require("express");
const Contact = require("../model/contactModel")
module.exports.getContacts = async (req, res) => {
    const contacts = await Contact.find();
    res.send(contacts)
}

module.exports.saveContacts = async (req, res) => {
    const { name, contact } = req.body;
    const contacts = new Contact({ name, contact });
    const saved = await contacts.save();
    res.send(saved);
}

module.exports.editContact = async (req, res) => {
    const { _id, contact, name } = req.body;
    Contact
        .findByIdAndUpdate(_id, { contact, name })
        .then(() => res.send("updated successfully..."))
        .catch(err => res.send(err))
}

module.exports.deleteContact = async (req, res) => {
    const { _id } = req.body;
    console.log(req.body)
    Contact
        .findByIdAndDelete(_id)
        .then(() => res.send("deleted successfully..."))
        .catch(err => res.send(err))
}