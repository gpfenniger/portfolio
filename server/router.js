const router = require("express").Router();
const showdown = require("showdown");
const parser = new showdown.Converter();
const path = require("path");
const fs = require("fs");

let sendSection = (res, sectionName) => {
  res.send(
    parser.makeHtml(
      fs.readFileSync(
        path.join(__dirname + `/assets/sections/${sectionName}.md`),
        "utf-8"
      )
    )
  );
};

router
  .get("/api/education", (_req, res) => sendSection(res, "education"))
  .get("/api/honours", (_req, res) => sendSection(res, "honours"))
  .get("/api/professional", (_req, res) => sendSection(res, "professional"))
  .get("/api/skills", (_req, res) => sendSection(res, "skills"))
  .get("/api/volunteer", (_req, res) => sendSection(res, "volunteer"));

module.exports = router;
