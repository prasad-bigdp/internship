// models/User.js
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true, index: true },
		phone: { type: String }, // Contact number
		password: { type: String, required: true },
		role: { type: String, default: "user" },
		about: { type: String }, // Short bio
		experience: [
			{
				company: String,
				title: String,
				from: Date,
				to: Date,
			},
		],
		education: [
			{
				institution: String,
				degree: String,
				from: Date,
				to: Date,
			},
		],
		skills: [String], // For matching
		resumeUrl: { type: String }, // Cloudinary link
		appliedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
		settings: {
			notifications: { type: Boolean, default: true },
			darkMode: { type: Boolean, default: false },
		},
	},
	{ timestamps: true },
)
