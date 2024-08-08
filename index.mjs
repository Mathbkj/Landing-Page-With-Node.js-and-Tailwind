import express from "express";
import API from "./DB/API.mjs";
import { dirname, join } from "path";
const page = express();
const PORT = 3000;
const __dirname = dirname("./public");

page.use(express.static(join(__dirname, "./public")));
page.use(express.json());

page.use("/API_DB", () => {
  console.log("Connected To Database");
});

page.get("/", (req, res) => {
  res.sendFile(join(__dirname, "./public/index.html"));
});
page.post("/", (req, res, next) => {
  const { FirstName, Email } = req.body;
  console.log({ Name: FirstName, MailAddress: Email });
  API(FirstName, Email);
});
page.get("#", (req, res, next) => {});
page.listen(PORT, () => console.log(`LISTENING ${PORT}`));
