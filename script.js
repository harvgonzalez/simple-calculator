let firstValue = parseInt(document.getElementById("number1").value);
let operator = document.getElementById("operator");
let secondValue = parseInt(document.getElementById("number2").value);

console.log("firstValue", firstValue);
console.log("operator", operator);
console.log("secondValue", secondValue);


switch (operator){
    case "+":
        console.log(firstValue + secondValue);
        break;
    case "-":
        console.log(firstValue - secondValue);
        break;
    case "/":
        console.log(firstValue / secondValue);
        break;
    case "*":
        console.log(firstValue * secondValue);
        break;
    default:
        console.log("Values are incorrect");
        break;

}
console.log("Hello world!")



/*Listen to user interaction on a button
At this step, when you enter a new operation, console.log() does not show any result. However if you refresh your page,
 input values are kept and the result will be correct.
In order to have a more user friendly approach, we will add a new "calculate" button. 

When user will click on this button, it will retrieve current input values and launch the arithmetic operation.
First, add this new "calculate" button in index.html.

Then, in script.js, you have to listen when the user will click on this button. 
To do that, you have to attach an eventListener to the element you want to monitor. 
An eventListener is a function which will 
be executed when a specific event is triggered on a specific element. 
What is an event ? it could be a click, a mouse hovering an element, a double click, a keyboard interaction, a scroll, etc. Exhaustive list of events.*/