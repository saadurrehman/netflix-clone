const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
  app.get("*", (req, resp) => {
    resp.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, console.log("Started server on port:: ", PORT));
