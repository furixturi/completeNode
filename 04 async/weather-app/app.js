const request = require('request');
const apiKey = "AIzaSyCyoH0zQlgSU6DjtQGtVvyWtiImXYYVlWE";
request(
  {
    url:
      "https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia",
    json: true
  },
  (err, res, body) => {
    console.log(JSON.stringify(res, undefined, 2));
  }
);