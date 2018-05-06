const request = require("request");
const yargs = require("yargs");

const { getGeoLocation } = require('./geocode');
const { getWeather } = require('./weather');

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

const addressInput = argv.address;

getGeoLocation(addressInput, getWeather);
