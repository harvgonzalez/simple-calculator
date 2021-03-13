// button variable and events
const calculateButton = document.getElementById('button')
const result = document.querySelector('.total');

calculateButton.addEventListener('click', function(){
    // First value variable
    const firstValue = parseInt(document.getElementById("firstValue").value)
    // operator
    const operator = document.getElementById("operator").value;
    //second value variable
    const secondValue = parseInt(document.getElementById("secondValue").value);
    // final value
    let finalValue = "";

    // new result
    // operator
    switch (operator){
        case "+":
            console.log(firstValue + secondValue);
            finalValue = firstValue + secondValue;
            break;
        case "-":
            console.log(firstValue - secondValue);
            finalValue = firstValue - secondValue;
            break;
        case "/":
            console.log(firstValue / secondValue);
            finalValue = firstValue / secondValue;
            break;
        case "*":
            console.log(firstValue * secondValue);
            finalValue = firstValue * secondValue;
            break;
        default:
            console.log("Values are incorrect");
            break;
    
    }
    // result class toggle
    result.innerHTML = `Result: ${finalValue}`;
    document.getElementById("firstValue").value = 0;
    document.getElementById("secondValue").value = 0;

})


console.log(`${firstValue - secondValue}`);



