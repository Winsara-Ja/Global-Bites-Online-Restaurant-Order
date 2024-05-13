const express = require("express");
const router = express.Router();
const upload = require('../upload')
const cors = require("cors");
const {
  getCatering,
  createCatering,
  updateCatering,
  deleteCatering,
  getCateringMenu,
  getCount,
  getUser,
  getSingleItem,
  createItem,
  deleteItem,
  getUserCatering,
  updateItem
} = require("../controllers/cateringController");

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);


router.post("/createMenu", upload.single("image"), createItem)
router.get("/itemsMenu/:id", getSingleItem)
router.delete("/deleteMenu/:id", deleteItem)
router.put("/updateMenu/:id", updateItem)
router.get("/catering", getCatering);
router.get("/catering/:id", getUserCatering);
router.get("/cateringMenu", getCateringMenu);
router.post("/create/catering", createCatering);
router.put("/catering/update", updateCatering);
router.delete("/catering/delete/:id", deleteCatering);
router.get("/user/:id", getUser);
router.get("/count", getCount);

module.exports = router;
