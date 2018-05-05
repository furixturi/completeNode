var person = {
  name: 'Xiaoli'
};

person.age = 25;
person.name = 'Mike';
console.log(person)

// to debug, run 
// $node inspect debugging.js 
// debug> list(10) //list 10 lines above and below our breakpoint
// debug> n //shorthand for next: Go to next line
// debug> c //shorthand for continue: Run the remaining lines
// debug> repl //go to repl mode: read-evauate-print-loop, 
//                where we can access the current app stand,
//                manipulate variables & co
// >
