const express = require("express");
const app = express();

// app.use((req, res) => {
// 	console.log("got your request");
// 	res.send("got your request buddy!");
// });

app.get("/", (req, res) => {
	res.send("<h1> welcome to my webpage! </h1>");
});

app.get("/cats", (req, res) => {
	res.send("<h1> Meow </h1>");
});

app.get("/dogs", (req, res) => {
	res.send("<h1> Woof </h1>");
});

app.listen(3000, () => {
	console.log("Listening on port 3000");
});
