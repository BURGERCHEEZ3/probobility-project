console.log("script started");

function guess() {
    let randomNumber = Math.random() * 5;
    let wholeNumber = Math.floor(randomNumber) + 1; 
    return wholeNumber;
}

function handleButtonClick() {
    let result = guess();
    alert("Your random number is: " + result);

}

let myButton = document.getElementById("randomButton");
myButton.addEventListener("click", handleButtonClick);

let userInput = prompt("Type your guess:");
if (userInput) = wholeNumber
println("Your guess is correct!");
else
println("Your guess is incorrect. Try again!");
