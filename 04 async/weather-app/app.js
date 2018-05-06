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
const geocodeAPI = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressURIEncoded}&key=${apiKey}`;

request(
  {
    url: geocodeAPI,
    json: true
  },
  (err, res, body) => {
    if (err) {
      console.log("Server Error: ", err);
      return;
    }
    // console.log(JSON.stringify(res, undefined, 2));

    if (body.status === "OK") {
      console.log("============= OjbK ============");
      const result = body.results[0];
      const latitude = result.geometry.location.lat;
      const longitude = result.geometry.location.lng;
      const weatherAPIKey = "7ee9610ef9246e35fb7a298e6023a3b6";
      const weatherAPI = `https://api.darksky.net/forecast/${weatherAPIKey}/${latitude},${longitude}?units=si`;

      console.log("address:", result.formatted_address);
      console.log("latitude:", latitude, "longitude:", longitude);
      console.log(
        "======== Now getting some weather reports for that place ======="
      );
      console.log(weatherAPI);

      request(
        {
          url: weatherAPI,
          json: true
        },
        (err, res, body) => {
          if (err || res.statusCode !== 200) {
            switch (res.statusCode) {
              case 404:
                console.log("Not found: ", err);
                break;
              case 400:
                console.log("Bad request: ", err);
                break;
              default:
                console.log("Calling weather API server error: ", err);
            }
          } else {
            const { summary, temperature } = body.currently;
            console.log(`${summary}, ${temperature} degrees`);
          }
        }
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
