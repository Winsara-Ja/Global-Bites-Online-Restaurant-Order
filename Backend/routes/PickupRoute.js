const express = require("express");
const router = express.Router();
const PickupController = require("../controllers/PickupController");

router.get("/", PickupController.getAllPickups);
router.get("/:id", PickupController.getPickupById);
router.post("/", PickupController.addPickup);
router.put("/:id", PickupController.updatePickup);
router.delete("/:id", PickupController.deletePickup);

module.exports = router;
