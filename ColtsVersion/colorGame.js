let colors = generateRandomColors(6);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
colorDisplay.textContent=pickedColor;

for (let i = 0; i < squares.length;i++){
    // add colors to squares
    squares[i].style.background = colors[i];

    // add click listener to sqaures
    squares[i].addEventListener("click", function(){
        //grab color of picked square
        let clickedColor = this.style.background;
        //compare color to pickedColor
        if (clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        }
        else{
            this.style.background ="#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

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
