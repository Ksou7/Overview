const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
// const env = require("dotenv").config();
const port = process.env.PORT || 3003;

const axios = require("axios");

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));
//fetch array of thumbnail url and url
app.get("/overview", async (req, res) => {
  try {
    // const auth = process.env.TOKEN;
    const auth = "f71f33ddc1b38f20fe1db1db981ba172e54bf4a9";
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

//fetch he styles
app.get("/overview/style", async (req, res) => {
  try {
    const auth = "f71f33ddc1b38f20fe1db1db981ba172e54bf4a9";
    console.log(auth);
    const data = await axios.get(
      "https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11003/styles",
      { headers: { Authorization: auth } }
    );
    console.log("pppppppp", data.data);
    res.send(data.data.results);
  } catch (err) {
    res.send(err);
  }
});
//FETCH THE SIZE AND THE QUANTITY
app.get("/overview/q", async (req, res) => {
  try {
    const auth = "f71f33ddc1b38f20fe1db1db981ba172e54bf4a9";
    console.log(auth);
    const data = await axios.get(
      "https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11003/styles",
      { headers: { Authorization: auth } }
    );

    var size = data.data.results.map((obj, i) => {
      return Object.values(obj.skus);
    });
    res.send(size);
  } catch (err) {
    console.log(err);
  }
});

//fetch the data for products
app.get("/overview/product", async (req, res) => {
  try {
    const auth = "f71f33ddc1b38f20fe1db1db981ba172e54bf4a9";
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
