import express from "express";
import getContacts from "../controllers/contactCtrl.js"
const router = express.Router();

router.get("/", getContacts);
// router.post("/save", followCtrl.addFollowing);
// router.put("/edit", followCtrl.addFollowing);
// router.delete("/delete", followCtrl.addFollowing);

export default router;