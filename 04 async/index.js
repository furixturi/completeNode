// Push the main() into call stack

// Pushed into the call stack above main and get executed right away
console.log('Starting app'); 

// From call stack to Node API, register a event listener with the event loop
// counting 2 secs in the node API 
// Not in the call stack therefore non-blocking
setTimeout(
  // After 2 secs, it gets to the Callback Queue
  () => {
  console.log('Inside of callback 1');
}, 2000);

/// From call stack to Node API, register a event listener with the event loop
// counting 0 secs in the node API 
// Not in the call stack therefore non-blocking
setTimeout(
  // Gets into the callback queue right away
  // Can't be executed in the call stack 
  // since the main() is not yet finished and popped out
  () => {
  console.log('Second setTimeout');
}, 0);

// get's pushed above the main() stack in callstack and executed
console.log('Finishing up');
// Here the main() is finished and popped out of the call stack

// Event loop found there's a func in the callback pool
// It pushes it to the call stack to let it be executed

// Node API counts 2 secs and notifies the event loop
// The other callback lands in callback pool

// Event loop sees the call stack is empty,
// Now the second callback can be pushed in the call stack