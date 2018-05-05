var person = {
  name: 'Xiaoli'
};

person.age = 25;

debugger; // debug> c //will go directly to this line

person.name = 'Mike';
console.log(person)

// to debug, run 
// $node inspect debugging.js [some parameters]
// or $nodemon inspect debugging.js [some parameters]

// * to get out of debugger command line: crtl-c 2 times

// debug> list(10) //list 10 lines above and below our breakpoint
// debug> n //shorthand for next: Go to next line
// debug> c //shorthand for continue: Run the remaining lines
// debug> repl //go to repl mode: read-evauate-print-loop, 
//                where we can access the current app stand,
//                manipulate variables & co
// > person.name = "Tom"

// * to get out of repl mode: ctrl-c
