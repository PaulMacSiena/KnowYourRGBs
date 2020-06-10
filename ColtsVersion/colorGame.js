let numSquares = 6;
let colors = [];
let pickedColor;

let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons(){
    for (let i =0; i <modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons.forEach(function(button){
                button.classList.remove("selected");
            })
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}

function setUpSquares(){
    for (let i = 0; i < squares.length;i++){
        // add click listener to sqaures
        squares[i].addEventListener("click", function(){
            //grab color of picked square
            let clickedColor = this.style.background;
            //compare color to pickedColor
            if (clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
                resetButton.textContent = "Play Again?";
            }
            else{
                this.style.background ="#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}
function reset(){
    colors = generateRandomColors(numSquares);
    
    //pick a new random color from array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for (let i = 0; i < squares.length;i++){
        if (colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "NEW COLORS";
}

resetButton.addEventListener("click",function(){
    reset();
});

function changeColors(color){
    //loop through all squares
    for (let i =0;i<colors.length;i++){
        squares[i].style.background = color;
    }
    //change each color to match given color
}

function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    let arr = [];
    //repeat num times
    for (let i =0; i <num;i++){
        arr.push(randomColor());
        //get random color and push into arr
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a red from 0 - 255
    let r = Math.floor(Math.random() * 256);
    //pick a green from 0 - 255
    let g = Math.floor(Math.random() * 256);
    //pick a blue from 0 - 255
    let b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", "+ g +", " + b +")"
}
