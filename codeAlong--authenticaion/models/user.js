const mongoose = require("mongoose");
const { Schema } = mongoose;

const userS = new Schema({
	username: {
		type: String,
		required: [true, "Username cannot be blank"]
	},
	password: {
		type: String,
		required: [true, "Must have a passwords"]
	}
});

module.exports = mongoose.model("User", userS);
