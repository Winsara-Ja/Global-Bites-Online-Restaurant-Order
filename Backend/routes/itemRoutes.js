const express = require("express")
const router = express.Router()
const upload = require('../upload')

const { getAllItems, getSingleItem, createItem, deleteItem, updateItem, updateAvailability} = require("../controllers/itemController")
// Get all Items

router.post("/create", upload.single("image"), createItem)
router.get("/items", getAllItems)
router.get("/items/:id", getSingleItem)
router.delete("/delete/:id", deleteItem)
router.put("/update/:id", updateItem)
router.put("/updateAvailability/:id", updateAvailability)

module.exports = router