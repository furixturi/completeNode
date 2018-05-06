const request = require('request');

module.exports.getGeoLocation = (address, callback) => {
  console.log(`======== Getting GEO locations for ${address} ==========`)
  const addressURIEncoded = encodeURIComponent(address);
  const apiKey = "AIzaSyCyoH0zQlgSU6DjtQGtVvyWtiImXYYVlWE";
  const geocodeAPI = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressURIEncoded}&key=${apiKey}`;
  console.log(geocodeAPI);
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

      if (body.status === "OK") {
        const result = body.results[0];
        const latitude = result.geometry.location.lat;
        const longitude = result.geometry.location.lng;
        console.log('> Found full address: ', result.formatted_address);
        callback(latitude, longitude);

      } else {
        console.log("========= Failed to get GEO location!!! =========");
        console.log("Error status:", body.status);
        console.log(
          "Friendly yet confusing message from Google:",
          body.error_message
        );
      }
    }
  );

}