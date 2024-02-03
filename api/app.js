const express = require("express");

const app = express();
const Port = process.env.PORT || 8000;

app.use("/api", require("./Router/Router"));

app.listen(Port, () => console.log("server listening on port 8000"));
