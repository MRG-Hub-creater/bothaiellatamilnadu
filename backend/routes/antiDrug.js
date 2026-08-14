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

// Rate limit submissions: max 10 submissions per 15 minutes per IP
const submissionLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many submissions from this IP. Please try again after 15 minutes."
  }
});

router.post("/", submissionLimiter, createSubmission);
router.get("/count", getPledgeCount);
router.get("/", getAllSubmissions);
router.get("/all", getAllSubmissions);
router.delete("/:id", deleteSubmission);

// Visitor Count Routes
router.post("/visitor/increment", incrementVisitorCount);
router.get("/visitor/count", getVisitorCount);

module.exports = router;
