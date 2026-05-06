console.log("script started");

function guess() {
    let randomNumber = Math.random() * 5;
    let wholeNumber = Math.floor(randomNumber) + 1; 
    return wholeNumber;
}


function handleButtonClick() {

    let result = guess();
    let userInput = prompt("Type your guess:");
    alert("Your random number is: " + result);
    if (result) {
        (userInput == result) 
    if (userInput != result) console.log("Your guess is incorrect. Try again!");
    if (userInput == result) console.log("Your guess is correct!"); 

    let resultElement = document.getElementById("result");

    if (userInput == result) {
    resultElement.innerText = "you got it right!";
    resultElement.style.fontSize = "100px";
    resultElement.style.textAlign = "center";
} else {
    resultElement.innerText = "you got it wrong";
     resultElement.style.fontSize = "100px";
     resultElement.style.textAlign = "center";
}

    
 }
}

let myButton = document.getElementById("randomButton");
myButton.addEventListener("click", handleButtonClick);
