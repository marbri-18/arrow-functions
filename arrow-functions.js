/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
    function addTwoNumbers (a, b){
        //code block
        return  a + b;
    }
    sum = addTwoNumbers(6, 5);
    console.log(sum);
// Arrow Function With Parameters
const addTwoNumbers1 = (a, b) => {
    //code block
    return  a + b;
}
sum1 = addTwoNumbers1(9, 5);
console.log(sum1);

// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(4, 9);
console.log(sum2);


// Implicit Returns
const saySomething = message => console.log(message);
saySomething("Hello World!");

const sayHello = () => console.log("Hello again World!");
sayHello();

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
    This is a multi line string!
    </p>`
)
console.log(returnMultipleLines());