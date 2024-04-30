const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  getCatering,
  createCatering,
  updateCatering,
  deleteCatering,
  getCount,
  getUser,
} = require("../controllers/cateringController");

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.get("/catering", getCatering);
router.post("/create/catering", createCatering);
router.put("/catering/update", updateCatering);
router.delete("/catering/delete/:id", deleteCatering);
router.get("/user/:id", getUser);
router.get("/count", getCount);

module.exports = router;
