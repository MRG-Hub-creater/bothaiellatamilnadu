// const mongoose = require("mongoose");

// const antiDrugSchema = new mongoose.Schema({
//   name: { type: String, trim: true, default: "" },
//   whatsappNumber: { type: String, trim: true, default: "" },
//   email: { type: String, trim: true, default: "" },
//   district: { type: String, trim: true, default: "" },
//   place: { type: String, trim: true, default: "" },
//   acknowledgement: { type: Boolean, default: true },
//   createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model("AntiDrug", antiDrugSchema);


const mongoose = require("mongoose");

const antiDrugSchema = new mongoose.Schema({
  name: { type: String, trim: true, default: "" },
  whatsappNumber: { type: String, trim: true, default: "" },
  email: { type: String, trim: true, default: "" },
  district: { type: String, trim: true, default: "" },
  place: { type: String, trim: true, default: "" },
  acknowledgement: { type: Boolean, default: true },

  // Generated Reference ID (Format: TN2026XXXXXXXX)
  refString: {
    type: String,
    unique: true,
    sparse: true // Allows existing MongoDB entries without refString to remain valid
  },

  // Identifies which site submitted the record
  websiteSource: {
    type: String,
    default: "bothaiellatamilnadu.in"
  },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("AntiDrug", antiDrugSchema);