// models/Job.js
const mongoose = require("mongoose")

const jobSchema = new mongoose.Schema(
	{
		title: { type: String, required: true, index: true },
		description: { type: String, required: true },
		skillsRequired: [String],
		employer: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Employer",
			required: true,
		},
		location: { type: String },
		salaryRange: { type: String },
		applicantsCount: { type: Number, default: 0 }, // O(1) count
	},
	{ timestamps: true },
)
