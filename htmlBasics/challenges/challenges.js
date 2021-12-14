/*Create a function called greet
This function should accept 2 parameters (greeting, name)
The function should return a string with a greeting. 
For example if you give the function the arguments "Good morning" and "Paul" it will return the string "Good Morning Paul"
Console.log and call the function.*/


// TATYANAs SOLUTION

let greeting = (greet, name) => { // console.log(`${greet} ${name} `);
    return `${greet}  ${name}`
}
let g = greeting("Good morning ", "Paul");
console.log(g)

// SOLUTION:

function greet(greeting, name) {
    return `${greeting} ${name}`
};

console.log(greet("Good Morning", "Paul"));

// THIS ONE SHOULD NOT HAVE GIVEN ME ANY TROUBLE - NEED TO REVIEW FUNCTIONS AGAIN!!!!!


/* CHALLENGE 2
Create some code that counts from 0 to 100. 
Create some code that tests if the number is divisible by 3, 5, or 3 & 5.
If it is divisible by 3 print "Fizz"
If it is divisible by 5 print "Buzz"
If it is divisible by 3 & 5 print "FizzBuzz"
If the number is not divisible by any of these, print the number itself.

*/

for (let x = 1; x <= 100; x++) {
    if (x % 3 === 0 && x % 5 === 0) { // if x is divisible by 3 and divisible by 5
        console.log(x, "fizz buzz")
    }
    if (x % 3 === 0) {
        console.log(x, "fizz")
    }
    if (x % 5 === 0) {
        console.log(x, "buzz")
    }
}

//  for (let x =1, stop at 100, count by 1's)
//  if (x is divisible by 3 remainder zero AND if x is divisible by 5 remainder zero, then){
// do this:  list the number and the word "fizz buzz", then loop
//  if (x is divisible by 3 remainder zero, then){
//  do this: list the number and the word "fizz", then loop
//  (x is divisible by 5 remainder zero, then) {
//  do this: list the number and the word "buzz"

// ENGEBORGs ANSWER is below

/*
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizz")
    } else if (i % 5 === 0) {
        console.log("buzz")
    } else if (i % 3 === 0) {
        console.log("fizz buzz")
    } else {
        console.log(i);
    }

    */

// CHALLENGE 3
/*  Create a function that accepts the parameters (base, height).
Inside of the function use the parameters to calculate the area of a rectangle (A = base*height)
Console.log the result. */


function multiplyNumbers(base, height) {
    return base * height;
}
console.log(multiplyNumbers(2, 3));


/* CHALLENGE 4
Create an object named Monsters.
Create three keys in the object containing a monster name
Each monster name key should contain an object including:
   * traits: array containing at least 2 strings
   * size: string
   * description: string
   * dangerous: boolean
   * defeatMethods: an object containing tools to defeat as keys and descriptions of how to use as a string
   */

let monsters = {
    dracula: {
        traits: ["human", "photophobia", "thirsty"],
        size: "range from small to final-boss",
        desc: "well dressed with sharp teeth and a thirst for your blood",
        dangerous: true,
        defeatMethods: {
            defeatTool: "large caliber yeetCannon",
            defeatAction: "kinetic and bio-chemical reaction",
            defeatSteps: "Propel your thoughts into efficient action and net not hesitation stall them: load silver bullet into yeetCannon, make rise your steel weightless, squeeze trigger until slide glides through trigger reset after break - repeat until offending undead no longer offends.",
        }
    },
    frankenstein: {
        traits: ["human", "poor communicator", "quick to anger"],
        size: "final-boss",
        desc: "humbly dressed, heavily muscled, greenish skin-tone",
        dangerous: true,
        defeatMethods: {
            defeatTool: "Record Player and Fire",
            defeatAction: "deception and applied heat",
            defeatSteps: "play song: 'puttin on the ritz' to lull monster into vaudvillian dance act - the group must zerg rush the frankenstein, bind frankenstein and burn at stake.",
        }
    },
    godzilla: {
        traits: ["reptilian, aggressive, has multiple dangerous weapons"],
        size: "from XXL to super-duper sized",
        desc: "giant reptile with laser vision and fire breath and a certain disdain for Japanese architecture",
        dangerous: true,
        defeatMethods: {
            defeatTool: "no known defeatTool",
            defeatAction: "no known defeatActions currently exist - you are alive at Godzilla's mercy.",
            defeatSteps: "If encountered - sit down, ponder your life, and wait for your demise"
        }
    },
};

console.log(monsters.dracula)
console.log(monsters.frankenstein)
console.log(monsters.godzilla)


//------------------------------------------------------------
/* NOTES FROM THIS WEEK  --  Javascript Concepts
​/*
- Comments: (back ticks, quotations, single quotation)
- Variables: `let`, `var`, `const`
- Data Types
  - `number`: 23
  - `boolean`: true / false
  - `string`: `""`, `''`, ``
  - `object`: { key: value }
  - `array`: [ value, value2 ]
- Conditionals: `if`, `else`, `else if`, `switch`, `ternary`
- Loops: `for`, `for of`, `for in`
- Functions: `function`
- Coercion:
- Hoisting:  

At the end of the day, JavaScript boils down to these basic things. Anything else just stacks on top of these core technologies
*/