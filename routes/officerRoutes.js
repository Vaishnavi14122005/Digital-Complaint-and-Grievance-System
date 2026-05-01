const express = require("express");
const router = express.Router();


const {
  getAssignedComplaints,
  updateAssignedComplaint,
} = require("../controllers/officerController");


router.get("/complaints", getAssignedComplaints);
router.put("/complaints/:id", updateAssignedComplaint);

module.exports = router;