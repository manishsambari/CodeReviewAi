const express = require("express")
const router = express.Router()
const aiCountroller = require("../controllers/ai.countrollers")

router.post("/get-review", aiCountroller.getReview)

module.exports = router
