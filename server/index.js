const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const env = require("dotenv").config();
const port = process.env.PORT || 3001;

const axios = require("axios");

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));
app.get("/api/overview", async (req, res) => {
  try {
    const auth = process.env.TOKEN;
    console.log(auth);
    const data = await axios.get(
      "https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11003/styles",
      { headers: { Authorization: auth } }
    );
    console.log(data.data);
    res.send(data.data.results[0].photos);
  } catch (err) {
    res.send(err);
  }
});

app.get("/api/overview/product", async (req, res) => {
  try {
    const auth = process.env.TOKEN;
    console.log(auth);
    const data = await axios.get(
      "https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11003",
      { headers: { Authorization: auth } }
    );
    res.send(data.data);
  } catch (err) {
    res.send(err);
  }
});
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
///?product_id=11001/styles
