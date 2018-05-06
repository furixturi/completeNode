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

let fullAddress;
axios
  .get(geocodeAPI)
  .then(res => {
    if(res.data.status === 'ZERO_RESULTS') {
      throw new Error('Zero results found for that address');
    }
    // console.log(JSON.stringify(res.data, undefined, 2)); //response.data in axios is the same as the response.body or just body in request
    
    const result = res.data.results[0];
    fullAddress = result.formatted_address;

    const latitude = result.geometry.location.lat;
    const longitude = result.geometry.location.lng;
    const weatherAPIKey = "7ee9610ef9246e35fb7a298e6023a3b6";
    const weatherAPI = `https://api.darksky.net/forecast/${weatherAPIKey}/${latitude},${longitude}?units=si`;

    return axios.get(weatherAPI);

  })
  .then(res => {
    const { summary, temperature, apparentTemperature, humidity } = res.data.currently;

    console.log(`Current weather at ${fullAddress}:`)
    console.log(`> ${summary}. ${temperature} degrees. ${humidity * 100}% humidity. It feels like ${apparentTemperature} degrees.`);
  })
  .catch(err => {
    if (err.code === "ENOTFOUND") {
      console.log("Unable to connect to API servers.");
    } else {
      console.log(err.message);
    }
  });
