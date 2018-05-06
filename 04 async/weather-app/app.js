const request = require("request");
const yargs = require("yargs");

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
const addressURIEncoded = encodeURIComponent(addressInput);
const apiKey = "AIzaSyCyoH0zQlgSU6DjtQGtVvyWtiImXYYVlWE";
const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressURIEncoded}&key=${apiKey}`;
console.log(url);

request(
  {
    url: url,
    json: true
  },
  (err, res, body) => {
    if(err) {
      console.log("Server Error: ", err);
      return;
    }
    // console.log(JSON.stringify(res, undefined, 2));

    if (body.status === "OK") {
      console.log("============= OjbK ============");
      const result = body.results[0];
      console.log("address:", result.formatted_address);
      console.log(
        "latitude:",
        result.geometry.location.lat,
        "longitude:",
        result.geometry.location.lng
      );
    } else {
      console.log("========= Panic!!! =========");
      console.log("Error status:", body.status);
      console.log(
        "Friendly yet confusing message from Google:",
        body.error_message
      );
    }
  }
);
