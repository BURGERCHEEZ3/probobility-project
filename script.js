console.log("script started");

let topButton = document.getElementById("top-button");
topButton.addEventListener("click", generateRandomNumber);
let messageDiv = document.getElementById("message");

let box = document.getElementById("button-box");
let randomNum = -1;

let restartButton = document.getElementById("restart-button");

restartButton.addEventListener("click", restartGame);

function restartGame() {
    location.reload();
}

function generateRandomNumber() {
  randomNum = Math.random() * 1000;
  randomNum = Math.floor(randomNum) + 1;
  console.log("Random number: " + randomNum);
  makeButtons(1000);
}


function makeButtons(num) {
  for (let i = 1; i <= num; i++) {
    let newButton = document.createElement("button");
    newButton.innerText = i;
    box.appendChild(newButton);
      newButton.addEventListener("click", handleButtonClick);
    
    box.appendChild(newButton);
  }
}

function handleButtonClick() {
    let newButton = this.innerText;
    console.log("Button " +  newButton + " was clicked!");
}

function handleButtonClick() {
    let newButton = this.innerText;

 if (newButton == randomNum) {
          messageDiv.innerText = "Congratulations, you got the button!";
          this.style.backgroundColor = "yellow";
    } else if (newButton < randomNum) {
        messageDiv.innerText = "Higher! You clicked " + newButton + ".";
        this.style.backgroundColor = "red";
    } else {
        messageDiv.innerText = "Lower! You clicked " + newButton + ".";
        this.style.backgroundColor = "blue";
    }
}