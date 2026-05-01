const express = require("express");
const router = express.Router();


const { getAnalytics } = require("../controllers/reportController");


router.get("/", getAnalytics);

module.exports = router;