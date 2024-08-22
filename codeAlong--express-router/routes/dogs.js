const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.send("dogs index");
});

router.get("/:id", (req, res) => {
	res.send("dogs id");
});

router.get("/:id/edit", (req, res) => {
	res.send("dogs edit");
});

module.exports = router;
