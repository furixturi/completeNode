var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Hey, it worked!");
    reject("Unable to fullfill promise");
  }, 2500)
});

somePromise.then((msg) => {
  console.log('Success:', msg)
}, (errorMsg) => {
  console.log('Error:', errorMsg)
});