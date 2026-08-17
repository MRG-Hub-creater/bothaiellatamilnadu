const express = require("express");
const router = express.Router();
const rateLimit = require("express-rate-limit");
const {
  createSubmission,
  getAllSubmissions,
  deleteSubmission,
  getPledgeCount,
  incrementVisitorCount,
  getVisitorCount
} = require("../controller/antiDrug");



router.post("/", createSubmission);
router.get("/count", getPledgeCount);
router.get("/", getAllSubmissions);
router.get("/all", getAllSubmissions);
router.delete("/:id", deleteSubmission);

// Visitor Count Routes
router.post("/visitor/increment", incrementVisitorCount);
router.get("/visitor/count", getVisitorCount);

module.exports = router;
