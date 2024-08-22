const express = require("express");
const app = express();

// Routes
const route_shelter = require("./routes/shelter");
const route_dogs = require("./routes/dogs");
const route_admin = require("./routes/admin");

// configuration middleware
app.use("/admin", route_admin);
app.use("/shelters", route_shelter);
app.use("/dogs", route_shelter);

const options = {
	port: 3000
};

app.listen(options.port, () => {
	console.log(`Listening on port: ${options.port}`);
});
