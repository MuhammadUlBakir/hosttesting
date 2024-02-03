const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const fs = require('fs');
const router = express.Router();

router.use(cors());
router.use(morgan("dev"));
router.use(express.json());
router.use(express.urlencoded({ extended: false }));
router.use('/images', express.static(path.join(__dirname, '../images')));

router.get("/hello", (req, res) => {
  res.send("Hello");
});

router.get("/getdata", (req, res) => {
  res.json({
    name: "muhammad-ul-Bakir",
  });
});

// router.get('/api/images/:imageName', (req, res) => {
//   const imageName = req.params.imageName;
//   const imagePath = path.join(__dirname, `../images`, imageName);

//   fs.readFile(imagePath, (err, data) => {
//     if (err) {
//       console.error(err);
//       res.status(404).send('Image not found');
//     } else {
//       res.writeHead(200, { 'Content-Type': 'image/jpeg' }); // Adjust the content type based on your image type
//       res.end(data);
//     }
//   });
// });

module.exports = router;
