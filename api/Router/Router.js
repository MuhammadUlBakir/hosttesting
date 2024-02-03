const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const router = express.Router();

router.use(cors());
router.use(morgan("dev"));
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.get("/hello", (req, res) => {
  res.send("Hello");
});

router.get("/getdata", (req, res) => {
  res.json({
    name: "muhammad-ul-Bakir",
  });
});

// router.get("/getimages", (req, res) => {

// })

module.exports = router;
