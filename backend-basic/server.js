const app = require("./app")
const mongoose = require("mongoose")

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		app.listen(process.env.PORT, () =>
			console.log(`Server running at http://localhost:${process.env.PORT}`),
		)
	})
	.catch((err) => console.error("MongoDB connection error:", err))
