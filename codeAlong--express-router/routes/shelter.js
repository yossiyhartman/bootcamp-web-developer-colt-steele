const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.send("shelters index");
});

router.get("/:id", (req, res) => {
	res.send("shelters id");
});

router.get("/:id/edit", (req, res) => {
	res.send("shelters edit");
});

module.exports = router;
