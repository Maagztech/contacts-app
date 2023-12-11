import contactModel from "../model/contactModel"

module.export.getContacts = async(req,res) =>{
    const contacts= await contactModel.find();
    res.send(contacts)
}

