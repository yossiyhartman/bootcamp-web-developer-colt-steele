const mongoose = require("mongoose");
const Product = require("./models/products");
const Farm = require("./models/farms");

mongoose
	.connect("mongodb://127.0.0.1:27017/farmStand")
	.then(() => {
		console.log("connection found");
	})
	.catch((err) => {
		console.log("error occured");
		console.log(err);
	});

Product.deleteMany();
Farm.deleteMany();

Product.insertMany([
	{ name: "Grapefruit", price: 1.99, category: "fruit" },
	{ name: "Banana", price: 0.79, category: "fruit" },
	{ name: "Pineaple", price: 2, category: "fruit" },
	{ name: "Brocolli", price: 1.19, category: "vegetable" },
	{ name: "Zuccini", price: 0.9, category: "vegetable" },
	{ name: "Eggplant", price: 1.1, category: "vegetable" },
	{ name: "Milk", price: 1.9, category: "dairy" },
	{ name: "Greek Yoghurt", price: 3.1, category: "dairy" },
	{ name: "Cheese", price: 2.45, category: "dairy" }
]).then((data) => {
	console.log(data);
});

Farm.insertMany([
	{ name: "Muddy Soil", city: "somewhere", email: "farmer@plant.com" },
	{ name: "Lively Chickens", city: "somewhere", email: "farmer@plant.com" },
	{ name: "Sunshine Boulevard", city: "somewhere", email: "farmer@plant.com" },
	{ name: "Flowery Fields", city: "somewhere", email: "farmer@plant.com" }
]).then((data) => {
	console.log(data);
});
