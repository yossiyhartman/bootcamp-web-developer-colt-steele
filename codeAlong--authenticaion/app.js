const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
const bcrypt = require("bcrypt");
const session = require("express-session");

mongoose
	.connect("mongodb://127.0.0.1:27017/authDemo")
	.then(() => {
		console.log("connection found");
	})
	.catch((err) => {
		console.log("error occured");
		console.log(err);
	});

const app = express();

// configuration
app.set("views", "views");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(
	session({
		secret: "simple secret",
		saveUninitialized: true,
		resave: false
	})
);
// Routes
// TODO

// configuration middleware
app.post("/register", async (req, res) => {
	try {
		const { username, password } = req.body;
		const hash = await bcrypt.hash(password, 12);
		const user = new User({ username, password: hash });
		await user.save();

		req.session.user_id = user.id;
		res.redirect("/register");
	} catch (error) {
		console.log("fucked up", error);
	}
});

app.get("/register", (req, res) => {
	res.render("register");
});

// configuration middleware
app.post("/login", async (req, res) => {
	try {
		const { username, password } = req.body;

		const user = await User.findOne({ username });

		bcrypt.compare(password, user.password).then(() => {
			req.session.user_id = user.id;
			res.redirect("/secret");
		});
	} catch (error) {
		console.log("fucked up", error);
	}
});

app.get("/login", (req, res) => {
	res.render("login");
});

app.post("/logout", (req, res) => {
	req.session.user_id = null;
	req.session.destroy();
	res.redirect("/login");
});

app.get("/secret", async (req, res) => {
	if (!req.session.user_id) {
		res.redirect("/login");
	} else {
		const { username } = await User.findById(req.session.user_id);
		res.render("secret", { username });
	}
});

const options = {
	port: 3000
};

app.listen(options.port, () => {
	console.log(`Listening on port: ${options.port}`);
});
