const express = require("express");
const router = express.Router();

router.get("/topsecret", (req, res) => {
	res.send("admin | topsecret");
});

router.get("/delete", (req, res) => {
	res.send("admin | delete");
});

module.exports = router;
