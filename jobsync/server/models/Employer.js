// models/Employer.js
const mongoose = require("mongoose")

const employerSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true, index: true },
		phone: { type: String },
		password: { type: String, required: true },
		company: { type: String },
		role: { type: String, default: "employer" },
		settings: {
			receiveApplicationEmails: { type: Boolean, default: true },
			darkMode: { type: Boolean, default: false },
		},
		createdJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
	},
	{ timestamps: true },
)
