const request = require("request");

module.exports.getWeather = (latitude, longitude) => {
  const weatherAPIKey = "7ee9610ef9246e35fb7a298e6023a3b6";
  const weatherAPI = `https://api.darksky.net/forecast/${weatherAPIKey}/${latitude},${longitude}?units=si`;
  console.log("======== Now getting some weather reports for that place =======");
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
        console.log(`> ${summary}, ${temperature} degrees`);
      }
    }
  );

};