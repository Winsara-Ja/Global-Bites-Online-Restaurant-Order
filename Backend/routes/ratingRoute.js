const express = require("express")
const router = express.Router()

const {AddRating, getSingleRating, sendEmails} = require("../controllers/ratingController")

router.post("/ratings", AddRating)
router.get("/ratings/:itemId/:userId", getSingleRating)
router.post("/send-email", sendEmails)

module.exports = router