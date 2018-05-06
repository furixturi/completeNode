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

  console.log(argv);

// const apiKey = "AIzaSyCyoH0zQlgSU6DjtQGtVvyWtiImXYYVlWE";
// request(
//   {
//     url:
//       "https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia",
//     json: true
//   },
//   (err, res, body) => {
//     console.log("error: ", err);
//     console.log(JSON.stringify(res, undefined, 2));

//     if (body.status === "OK") {
//       console.log("============= OjbK ============");
//       const result = body.results[0];
//       console.log("address:", result.formatted_address);
//       console.log(
//         "latitude:",
//         result.geometry.location.lat,
//         "longitude:",
//         result.geometry.location.lng
//       );
//     } else {
//       console.log("========= Panic!!! =========");
//       console.log("Error status:", body.status);
//       console.log(
//         "Friendly yet confusing message from Google:",
//         body.error_message
//       );
//     }
//   }
// );
