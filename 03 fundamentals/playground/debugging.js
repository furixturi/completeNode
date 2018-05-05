var person = {
  name: 'Xiaoli'
};

person.age = 25;

debugger; // debug> c //will go directly to this line

person.name = 'Charllotte';
console.log(person)

/* Debug with terminal */
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



/* Debug with Chrom dedicated dev tool */
// $node inspect-brk debugging.js [parameters]
// $nodemon inspect-brk debugging.js [parameters]

/* Then go to chrome, type in address bar:
chrome://inspect

Then click "Open dedicated DevTools for Node" link

DevTools will open and debugging.js is shown in "Sources tab"
The console below (can toglle show and hide with Esc key) acts like the "repl" console

Right sidebar:
1. Blue play button (Resume script execution - F8) acts like "c" command
2. Arrow to the right button (Step - F9) acts like the "n" command

*/
