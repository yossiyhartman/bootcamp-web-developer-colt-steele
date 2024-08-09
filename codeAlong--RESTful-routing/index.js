let { comments } = require("./comments.json");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/comments", (req, res) => {
	res.render("comments/", { comments });
});

app.get("/comments/new", (req, res) => {
	res.render("comments/new");
});

app.get("/comments/:id", (req, res) => {
	const { id } = req.params;
	const item = comments.find((element) => element.id == id);
	res.render("comments/show", { item });
});

app.get("/comments/:id/edit", (req, res) => {
	const { id } = req.params;
	const item = comments.find((element) => element.id == id);
	res.render("comments/edit", { item });
});

app.patch("/comments/:id", (req, res) => {
	const { id } = req.params;
	const newText = req.body.comment;
	const item = comments.find((element) => element.id == id);
	item.comment = newText;
	res.redirect("/comments");
});

app.delete("/comments/:id", (req, res) => {
	const { id } = req.params;
	comments = comments.filter((element) => element.id !== id);
	res.redirect("/comments");
});

app.post("/comments", (req, res) => {
	const { username, comment } = req.body;
	const id = uuidv4();
	comments.push({ id, username, comment });
	res.redirect("comments");
});

app.listen(3000, () => {
	console.log("Listening on port 3000");
});
