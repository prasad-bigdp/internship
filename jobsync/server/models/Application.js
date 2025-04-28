// models/Application.js
const mongoose = require("mongoose")

const applicationSchema = new mongoose.Schema(
	{
		user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
		job: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
		employer: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Employer",
			required: true,
		},
		resumeUrl: { type: String, required: true },
		message: { type: String },
		status: {
			type: String,
			enum: ["applied", "shortlisted", "rejected"],
			default: "applied",
		},
	},
	{ timestamps: true },
)
