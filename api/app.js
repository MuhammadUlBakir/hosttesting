const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const Port = process.env.PORT || 8000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/hello", (req, res) => {
  res.send("Hello");
});

app.get("/api/getdata", (req, res) => {
  res.json({
    name: "muhammad-ul-Bakir",
  });
})

app.listen(Port, () => console.log("server listening on port 8000"));
