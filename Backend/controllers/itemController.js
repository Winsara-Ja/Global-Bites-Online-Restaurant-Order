const Items = require("../models/Items")

const getAllItems = async (req, res) => {
    try {
      const items = await Items.find({})
      res.json(items)
    } catch (error) {
      consol.log(error)
      res.status(500).json({ message: "Server error" })
    }
  };

const getSingleItem = async (req, res) => {
    try {
      const item = await Items.findById(req.params.id)
      res.json(item)
    } catch (error) {
      consol.log(error)
      res.status(500).json({ message: "Server error" })
    }
  }; 

  const createItem = async (req, res) => {
    try {
        const { itemId, itemName, Description, Price, category, country } = req.body;
        const image = req.file ? req.file.filename : null;
        const availability = "available";
        const averageRating = 0;

        const existingItem = await Items.findOne({ $or: [{ itemName: itemName }, { itemId: itemId }] });
        if (existingItem) {
            return res.status(400).json({ success: false, message: "Item already exists", exists: true });
        }

        const newItem = new Items({
            itemId: itemId,
            itemName: itemName,
            Description: Description,
            Price: Price,
            category: category,
            country: country,
            image: image,
            availability: availability,
            averageRating: averageRating
        });

        await newItem.save();

        res.json({ success: true, message: "Data saved successfully", data: newItem });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const deleteItem = async (req, res) => {
  try{
    const id = req.params.id
    const data = await Items.deleteOne({_id : id})
    res.send({success : true, message : "data deleted successfully", data : data})
  }catch (error){
    res.status(500).json({ success: false, message: error.message })
  }
    
}

const updateItem = async (req, res) => {

  const id = req.params.id
  const {itemId, itemName, Description, Price, category, country, image} = req.body
  try{
    const data = await Items.findByIdAndUpdate( id, {
      itemId: itemId,
      itemName: itemName,
      Description: Description,
      Price: Price,
      category: category,
      country: country,
      image: image
    })
    res.send({success : true, message : "data updated successfully", data : data})
  }catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
    
};

const updateAvailability = async (req, res) => {
  const itemId = req.params.id;
  const { availability } = req.body;

  try {
    // Find the item by ID in the database
    const item = await Items.findById(itemId);

    // If item not found, return 404 status
    if (!item) {
      return res.status(404).json({ success: false, message: "Item not found." });
    }

    // Update the availability status
    item.availability = availability;

    // Save the updated item
    await item.save();

    // Return success response
    return res.status(200).json({ success: true, message: "Availability updated successfully." });
  } catch (error) {
    console.error("Error updating availability:", error);
    return res.status(500).json({ success: false, message: "Internal server error." });
  }
}
  
module.exports = {
    getAllItems,
    getSingleItem,
    createItem,
    deleteItem,
    updateItem,
    updateAvailability
  }