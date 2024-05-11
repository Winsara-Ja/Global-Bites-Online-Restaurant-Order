const Ratings = require("../models/Ratings");
const Item = require("../models/Items")
const SendEmail = require("../nodemailer")

const AddRating = async (req, res) => {
  try {
    const { itemId, rating, userId } = req.body;

    // Check if the user has already rated the item
    const existingRating = await Ratings.findOne({ itemId, userId });

    // If the user has already rated the item, return an error
    if (existingRating) {
      return res.status(400).json({ success: false, message: 'You have already rated this item' });
    }

    // Create a new rating document
    const newRating = new Ratings({
      itemId,
      rating,
      userId
    });

    // Save the new rating to the database
    await newRating.save();

    // Fetch all ratings for the particular item
    const allRatings = await Ratings.find({ itemId });

    // Calculate the average rating
    const totalRatings = allRatings.reduce((acc, curr) => acc + curr.rating, 0);
    const averageRating = (totalRatings / allRatings.length).toFixed(1);

    // Update the average rating for the item in the database
    await Item.findByIdAndUpdate(itemId, { averageRating });

    res.status(201).json({ success: true, message: 'Rating saved successfully' });
  } catch (error) {
    console.error('Error saving rating:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

const getSingleRating = async (req, res) => {
  try {
    const { itemId, userId } = req.params;
    
    // Find the rating document for the given itemId and userId
    const rating = await Ratings.findOne({ itemId, userId });

    res.status(200).json({ rating });
  } catch (error) {
    console.error('Error fetching user rating:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

const sendEmails = async (req, res) => {
  const { recipientEmail, itemName, userRating } = req.body;
  try {
    await SendEmail(recipientEmail, itemName, userRating);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}

module.exports = {
  AddRating,
  getSingleRating,
  sendEmails
};
