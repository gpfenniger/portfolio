const express = require("express");
const path = require("path");

const app = express();
app.use(express.static("dist"));
app.use(require("./router"));

app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname + "/../dist/index.html"));
});

app.listen(process.env.PORT || 8080, () => console.log("listening"));
