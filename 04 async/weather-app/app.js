const axios = require("axios");
const yargs = require("yargs");

const geocode = require("./geocode");
const weather = require("./weather");

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Address to fetch weather for",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;

const addressURIEncoded = encodeURIComponent(argv.address);
const apiKey = "AIzaSyCyoH0zQlgSU6DjtQGtVvyWtiImXYYVlWE";
const geocodeAPI = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressURIEncoded}&key=${apiKey}`;

axios
  .get(geocodeAPI)
  .then(res => {
    console.log(JSON.stringify(res.data, undefined, 2)); //response.data in axios is the same as the response.body or just body in request
  })
  .catch(err => {});
