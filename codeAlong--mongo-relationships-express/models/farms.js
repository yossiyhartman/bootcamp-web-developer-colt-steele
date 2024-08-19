const mongoose = require("mongoose");
const { Schema } = mongoose;

const farmSchema = new Schema({
	name: {
		type: String,
		required: [true, "Farm must have a name!"]
	},
	city: {
		type: String
	},
	email: {
		type: String,
		required: [true, "Farm must have an email!"]
	},
	products: [
		{
			type: Schema.Types.ObjectId,
			ref: "Product"
		}
	]
});

module.exports = mongoose.model("Farm", farmSchema);
