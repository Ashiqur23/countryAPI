const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/shorturl", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;
const urlSchema = new Schema({
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true },
});

const Url = mongoose.model("Url", urlSchema);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/shorten", async (req, res) => {
  const { originalUrl } = req.body;
  const shortUrl = shortid.generate();
  const url = new Url({ originalUrl, shortUrl });
  await url.save();
  res.json({ originalUrl, shortUrl });
});

app.get("/:shortUrl", async (req, res) => {
  const { shortUrl } = req.params;
  const url = await Url.findOne({ shortUrl });
  if (url) {
    res.redirect(url.originalUrl);
  } else {
    res.status(404).send("Not Found");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
