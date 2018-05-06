const getUser = (id, callback) => {

  // Dummy
  var user = {
    id: id,
    name: "Vikram"
  }

  // Fake some delays
  setTimeout(() => {
    callback(user);
  }, 3000);

}

getUser(31, (user) => {
  console.log(user);
});