const express = require("express")
const router = express.Router()

const {AddRating, getSingleRating, sendEmails, getAllRatings } = require("../controllers/ratingController")

router.post("/ratings", AddRating)
router.get("/ratings/:itemId/:userId", getSingleRating)
router.post("/send-email", sendEmails)
router.get("/count/:itemId", getAllRatings)

module.exports = router