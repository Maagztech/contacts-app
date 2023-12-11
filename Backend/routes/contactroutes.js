const express = require("express");
const { getContacts, saveContacts, editContact, deleteContact } = require("../controllers/contactCtrl")
const router = express.Router();

router.get("/", getContacts);
router.post("/save", saveContacts);
router.patch("/edit", editContact);
router.post("/delete", deleteContact);

module.exports = router;