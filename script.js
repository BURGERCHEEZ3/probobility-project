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
        (userInput == result) {
        println("Your guess is correct!");
    else{
        println("Your guess is incorrect. Try again!");
    }    

    }
 }
}

let myButton = document.getElementById("randomButton");
myButton.addEventListener("click", handleButtonClick);
