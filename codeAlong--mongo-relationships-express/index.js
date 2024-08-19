const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Product = require("./models/products");
const Farm = require("./models/farms");
const methodOverride = require("method-override");
const farms = require("./models/farms");

mongoose
	.connect("mongodb://127.0.0.1:27017/farmStand")
	.then(() => {
		console.log("connection found");
	})
	.catch((err) => {
		console.log("error occured");
		console.log(err);
	});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Farms
app.get("/farms", async (req, res) => {
	const farms = await Farm.find();
	res.render("farms", { farms });
});

app.get("/farms/new", (req, res) => {
	res.render("newFarm");
});

app.post("/farms/new", async (req, res) => {
	const { farmName, farmCity, farmEmail } = req.body;
	res.send(req.body);
	await Farm.create({ name: farmName, city: farmCity, email: farmEmail });
	res.redirect("/farms");
});

app.get("/farms/:farm_id/products/new", (req, res) => {
	const { farm_id } = req.params;
	res.render("newProduct", { farm_id });
});

app.post("/farms/:farm_id/products/new", async (req, res) => {
	const { farm_id } = req.params;
	const { productName, productPrice, productCategory } = req.body;

	const farm = await Farm.findById(farm_id);
	const product = new Product({ name: productName, price: productPrice, category: productCategory });

	farm.products.push(product);
	product.farm = farm;

	await farm.save();
	await product.save();

	res.redirect(`/farms/${farm_id}`);
});

app.get("/farms/:id", async (req, res) => {
	const { id } = req.params;

	try {
		const farm = await Farm.findById(id).populate("products");
		res.render("farmDetails", { farm });
	} catch (err) {
		res.render("404");
	}
});

// Products
app.get("/products", async (req, res) => {
	const products = await Product.find();
	res.render("index", { products });
});

app.get("/products/new", (req, res) => {
	res.render("newProduct");
});

app.post("/products/new", async (req, res) => {
	const { productName, productPrice, productCategory } = req.body;
	await Product.create({ name: productName, price: productPrice, category: productCategory });
	res.redirect("/products");
});

app.get("/products/:id", async (req, res) => {
	const { id } = req.params;

	try {
		const product = await Product.findById(id);
		res.render("details", { product });
	} catch (err) {
		res.render("404");
	}
});

app.delete("/products/:id", async (req, res) => {
	const { id } = req.params;
	await Product.findByIdAndDelete(id);
	res.redirect("/products");
});

app.get("/products/:id/edit", async (req, res) => {
	const { id } = req.params;
	const product = await Product.findById(id);
	res.render("edit", { product });
});

app.patch("/products/:id/edit", async (req, res) => {
	const { id } = req.params;
	const { productName, productPrice, productCategory } = req.body;
	await Product.findByIdAndUpdate(
		id,
		{
			name: productName,
			price: productPrice,
			category: productCategory
		},
		{ runValidators: true }
	);
	res.redirect(`/products/${id}`);
});

app.listen(3000, () => {
	console.log("listening on port 3000");
});
