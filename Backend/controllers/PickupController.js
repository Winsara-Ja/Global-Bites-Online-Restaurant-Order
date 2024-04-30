const Pickup = require("../models/PickupModel");

const getAllPickups = async (req, res, next) => {
  try {
    const pickups = await Pickup.find();
    if (!pickups || pickups.length === 0) {
      return res.status(404).json({ message: "No pickups found" });
    }
    return res.status(200).json({ pickups });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getPickupById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const pickup = await Pickup.findById(id);
    if (!pickup) {
      return res.status(404).json({ message: "Pickup not found" });
    }
    return res.status(200).json({ pickup });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const addPickup = async (req, res, next) => {
  const { location, time, status, done } = req.body;
  try {
    const newPickup = new Pickup({
      location,
      time,
      status,
      done,
    });
    await newPickup.save();
    return res.status(201).json({ pickup: newPickup });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Unable to add pickup" });
  }
};

const updatePickup = async (req, res, next) => {
  const id = req.params.id;
  const { location, time, status, done } = req.body;

  try {
    const pickup = await Pickup.findByIdAndUpdate(id, {
      location,
      time,
      status,
      done,
    });
    if (!pickup) {
      return res.status(404).json({ message: "Unable to update pickup details" });
    }
    return res.status(200).json({ pickup });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const deletePickup = async (req, res, next) => {
  const id = req.params.id;

  try {
    const pickup = await Pickup.findByIdAndDelete(id);
    if (!pickup) {
      return res.status(404).json({ message: "Unable to delete pickup details" });
    }
    return res.status(200).json({ pickup });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllPickups,
  getPickupById,
  addPickup,
  updatePickup,
  deletePickup,
};
