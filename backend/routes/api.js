const express = require("express");
const { get } = require("../http/api-requests");
const router = express.Router();
const fs = require("fs");

router.get("/flights", async (req, res, next) => {

	try {

		new Promise((resolve, reject) => {
			resolve(fs.readFile("./data.json", "utf8", (err, jsonString) => {
				if (err) {
					console.log("Error reading file from disk:", err);
					return;
				}
				const data = JSON.parse(jsonString);
				res.json(data);
			}))
		})



	} catch (err) {
		next(err);
	}

});

module.exports = router;
