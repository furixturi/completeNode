const request = require("request");

var geocodeAddress = address => {
  const addressURIEncoded = encodeURIComponent(address);
  const apiKey = "AIzaSyCyoH0zQlgSU6DjtQGtVvyWtiImXYYVlWE";
  const geocodeAPI = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressURIEncoded}&key=${apiKey}`;

  return new Promise((resolve, reject) => {
    request(
      {
        url: geocodeAPI,
        json: true
      },
      (err, res, body) => {
        if (body.status === "OK") {
          resolve(body.results[0]);
        } else {
          let errorMessage = "";
          if (err) {
            console.log("Server error:", err);
            errorMessage = "Server error: " + res.statusCode;
          } else {
            errorMessage = "Error: " + body.status;
          }
          reject(errorMessage);
        }
      }
    );
  });
};

geocodeAddress("361002, China").then(
  location => {
    console.log(JSON.stringify(location, undefined, 2));
  },
  (errorMessage, error, response) => {
    console.log("Rejected:", errorMessage);
  }
);
