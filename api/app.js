const express = require("express");
const path = require('path');
const app = express();
const Port = process.env.PORT || 8000;

app.use("/api", require("./Router/Router"));
app.use('/api/images', express.static(path.join(__dirname, "./images")));

app.listen(Port, () => console.log("server listening on port 8000"));
