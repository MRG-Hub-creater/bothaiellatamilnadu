// const AntiDrug = require("../models/antiDrug");

// // Submit Anti-Drug Pledge / Form Details
// exports.createSubmission = async (req, res) => {
//   try {
//     const { name, whatsappNumber, email, district, place, acknowledgement } = req.body;

//     const newSubmission = await AntiDrug.create({
//       name,
//       whatsappNumber,
//       email,
//       district,
//       place,
//       acknowledgement: acknowledgement !== undefined ? acknowledgement : true
//     });

//     if (req.io) {
//       req.io.emit("anti_drug_updated", newSubmission);
//     }

//     return res.status(201).json({
//       success: true,
//       message: "Anti-Drug pledge submitted successfully!",
//       data: newSubmission
//     });
//   } catch (error) {
//     console.error("Error creating Anti-Drug submission:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Failed to submit Anti-Drug pledge. Please try again.",
//       error: error.message
//     });
//   }
// };

// // Get All Anti-Drug Submissions
// exports.getAllSubmissions = async (req, res) => {
//   try {
//     const submissions = await AntiDrug.find().sort({ createdAt: -1 });
//     return res.status(200).json({
//       success: true,
//       count: submissions.length,
//       data: submissions
//     });
//   } catch (error) {
//     console.error("Error fetching Anti-Drug submissions:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Failed to fetch Anti-Drug submissions.",
//       error: error.message
//     });
//   }
// };

// // Delete Submission by ID
// exports.deleteSubmission = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedItem = await AntiDrug.findByIdAndDelete(id);

//     if (!deletedItem) {
//       return res.status(404).json({
//         success: false,
//         message: "Submission not found."
//       });
//     }

//     if (req.io) {
//       req.io.emit("anti_drug_updated");
//     }

//     return res.status(200).json({
//       success: true,
//       message: "Submission deleted successfully!"
//     });
//   } catch (error) {
//     console.error("Error deleting Anti-Drug submission:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Failed to delete submission.",
//       error: error.message
//     });
//   }
// };


// // Get Total Pledge Count Fast
// exports.getPledgeCount = async (req, res) => {
//   try {
//     // countDocuments() is extremely fast and doesn't download the actual data
//     const count = await AntiDrug.countDocuments(); 
    
//     return res.status(200).json({
//       success: true,
//       count: count
//     });
//   } catch (error) {
//     console.error("Error fetching count:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Failed to fetch count.",
//       error: error.message
//     });
//   }
// };




const AntiDrug = require("../models/antiDrug");
const VisitorCount = require("../models/visitorCount");

// Helper function to generate 8-digit random number for reference code
const generateRefString = () => {
  const random8Digits = Math.floor(10000000 + Math.random() * 90000000); // Guarantees exactly 8 digits
  return `TN2026${random8Digits}`;
};

// Submit Anti-Drug Pledge / Form Details
exports.createSubmission = async (req, res) => {
  try {
    const { 
      name, 
      whatsappNumber, 
      email, 
      district, 
      place, 
      acknowledgement, 
      websiteSource,
      websiteEmail, // Honeypot field
      isRobotChecked,
      recaptchaToken
    } = req.body;

    // 1. Honeypot check: If the hidden honeypot field is filled, it's a bot submission.
    // We return a mock success response so the bot thinks it succeeded, but we do NOT save to the DB.
    if (websiteEmail) {
      console.log("Bot submission blocked silently via Honeypot.");
      return res.status(201).json({
        success: true,
        message: "Anti-Drug pledge submitted successfully!",
        refString: `TN2026${Math.floor(10000000 + Math.random() * 90000000)}`
      });
    }

    // 2. Real Google reCAPTCHA check
    if (!recaptchaToken) {
      return res.status(400).json({
        success: false,
        message: "Security verification failed. Missing reCAPTCHA token."
      });
    }

    try {
      const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`;
      const recaptchaRes = await fetch(verifyUrl, { method: "POST" });
      const recaptchaData = await recaptchaRes.json();

      if (!recaptchaData.success) {
        console.error("reCAPTCHA validation failed:", recaptchaData["error-codes"]);
        return res.status(400).json({
          success: false,
          message: "Security verification failed. Invalid reCAPTCHA token."
        });
      }
    } catch (error) {
      console.error("reCAPTCHA verification error:", error);
      // Fallback: if Google is down/unreachable, fallback to checkbox verification
      if (isRobotChecked !== true && isRobotChecked !== 'true') {
        return res.status(400).json({
          success: false,
          message: "Security verification failed. Please try again."
        });
      }
    }

    // Generate reference code: TN2026{8-digit-number}
    const refString = generateRefString();

    const newSubmission = await AntiDrug.create({
      name,
      whatsappNumber,
      email,
      district,
      place,
      acknowledgement: acknowledgement !== undefined ? acknowledgement : true,
      refString,
      websiteSource: websiteSource || req.headers.origin || "bothaiellatamilnadu.in"
    });

    if (req.io) {
      req.io.emit("anti_drug_updated", newSubmission);
    }

    // Response includes all user-entered inputs + generated refString
    return res.status(201).json({
      success: true,
      message: "Anti-Drug pledge submitted successfully!",
      refString: newSubmission.refString,
      data: newSubmission
    });
  } catch (error) {
    console.error("Error creating Anti-Drug submission:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to submit Anti-Drug pledge. Please try again.",
      error: error.message
    });
  }
};

// Get All Anti-Drug Submissions
exports.getAllSubmissions = async (req, res) => {
  try {
    const submissions = await AntiDrug.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: submissions.length,
      data: submissions
    });
  } catch (error) {
    console.error("Error fetching Anti-Drug submissions:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch Anti-Drug submissions.",
      error: error.message
    });
  }
};

// Delete Submission by ID
exports.deleteSubmission = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await AntiDrug.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({
        success: false,
        message: "Submission not found."
      });
    }

    if (req.io) {
      req.io.emit("anti_drug_updated");
    }

    return res.status(200).json({
      success: true,
      message: "Submission deleted successfully!"
    });
  } catch (error) {
    console.error("Error deleting Anti-Drug submission:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to delete submission.",
      error: error.message
    });
  }
};

// Get Total Pledge Count Fast
exports.getPledgeCount = async (req, res) => {
  try {
    const count = await AntiDrug.countDocuments();
    
    return res.status(200).json({
      success: true,
      count: count
    });
  } catch (error) {
    console.error("Error fetching count:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch count.",
      error: error.message
    });
  }
};

// Increment Visitor Count
exports.incrementVisitorCount = async (req, res) => {
  try {
    const record = await VisitorCount.findOneAndUpdate(
      {},
      { $inc: { count: 1 } },
      { new: true, upsert: true }
    );

    return res.status(200).json({
      success: true,
      count: record.count
    });
  } catch (error) {
    console.error("Error incrementing visitor count:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to increment visitor count.",
      error: error.message
    });
  }
};

// Get Visitor Count
exports.getVisitorCount = async (req, res) => {
  try {
    const record = await VisitorCount.findOne({});
    const count = record ? record.count : 0;
    return res.status(200).json({
      success: true,
      count: count
    });
  } catch (error) {
    console.error("Error fetching visitor count:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch visitor count.",
      error: error.message
    });
  }
};