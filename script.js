let positionsOfSquares = [];
let circleMove = false
let crossMove = true
let CircleCrossPositions = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let isWinner = checkWinner(CircleCrossPositions)
let crossScore = 0
let circleScore = 0
let musicTag = document.getElementById("music")
let soundPng = document.getElementById("sound")
let musicPlaying = 1
soundPng.addEventListener("click", function() {
    if (musicPlaying > 0) {
        musicTag.pause();
        musicTag.currentTime = 0;
        document.getElementById("sound").src = "soundOff.png"
    }
    else {
        musicTag.play()
        document.getElementById("sound").src = "soundOn.png"
    }
    musicPlaying *= -1
})

document.addEventListener("click", getMousePos);

// Loop which creates squares and adds them to html
for (let i = 0; i < 9; i++) {
    var square = document.createElement('div');
    square.className = "square";
    // id is mandatory in cellPosition function, offsets
    square.id = i
    document.getElementById("container").appendChild(square);
}
cellPosition() 

// Gets the current mouse positions and activates the getMousePos function 
function getMousePos(event) {
    mouseInSquare([event.clientX, event.clientY])
  }

// Adds all the square positions to positionsOfSquares
function cellPosition() {
    for (let i = 0; i < 9; i++) {
        var offsets = document.getElementById(i).getBoundingClientRect();
        var top = offsets.top;
        var left = offsets.left;   
        positionsOfSquares.push({x: left, y: top})
    }
}

// Check if the mouse is within one of the squares
function mouseInSquare(positionOfMouse) {
    for (let i = 0; i < positionsOfSquares.length; i ++) {
        // check x position
        if (positionOfMouse[0] >= positionsOfSquares[i].x && positionOfMouse[0] <= positionsOfSquares[i].x + 100) {
            // check y position
            if (positionOfMouse[1] >= positionsOfSquares[i].y && positionOfMouse[1] <= positionsOfSquares[i].y + 100) {
                if (squareIsFree(i) && crossMove) {
                    Main(i)
                }
            }
        }
    }

    // Generates a random circle position and draws a circle
    let canDraw = true;
    let randomPos = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
    if (CircleCrossPositions.some((value) => typeof(value) == "number")) {
        while (!squareIsFree(randomPos)) {
            randomPos = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
        }
    }
    else {
        canDraw = false
    }
    
    if (canDraw && !isWinner[0]) {
        setTimeout(function() {
            // So the user cant make a move with a circle during that second
            if (circleMove) {
                Main(randomPos)
            }
            
       }, 1000);
    }
    
    
}

// Basically the main function which checks the winner and restarts game
function Main(square) {
    let wasDrawn = changeTurns(square)
    CircleCrossPositions[square] = wasDrawn
    isWinner = checkWinner(CircleCrossPositions)
    if (isWinner[0] || !CircleCrossPositions.some((value) => typeof(value) == "number")) {
        if (isWinner[0]) {
            updateScore(wasDrawn)
        }
        // passes coordinates for the line
        drawLine(isWinner[1], isWinner[2])
        // restarts the game after 5 seconds
        setTimeout(function() {
            restartGame()
       }, 2000);
        
    }
}

// Tic tac toe rules, checks if there's a winner
function checkWinner(pos) {
    // rows
    if (pos[0] == pos[1] && pos[0] == pos[2]) {
        return [true, {x: 0, y: 50}, {x: 320, y: 50}]
    }
    else if (pos[3] == pos[4] && pos[3] == pos[5]) {
        return [true, {x: 0, y: 160}, {x: 320, y: 160}]
    }
    else if (pos[6] == pos[7] && pos[6] == pos[8]) {
        return [true, {x: 0, y: 270}, {x: 320, y: 270}]
    }
    // columns
    else if (pos[0] == pos[3] && pos[3] == pos[6]) {
        return [true, {x: 50, y: 0}, {x: 50, y: 320}]
    }
    else if (pos[1] == pos[4] && pos[4] == pos[7]) {
        return [true, {x: 160, y: 0}, {x: 160, y: 320}]
    }
    else if (pos[2] == pos[5] && pos[2] == pos[8]) {
        return [true, {x: 270, y: 0}, {x: 270, y: 320}]
    }
    // diagonally
    else if (pos[0] == pos[4] && pos[4] == pos[8]) {
        return [true, {x: 0, y: 0}, {x: 320, y: 320}]
    }
    else if (pos[2] == pos[4] && pos[2] == pos[6]) {
        return [true, {x: 320, y: 0}, {x: 0, y: 320}]
    }
    return [false, 0, 0]
}

// Checks whether the square is free
function squareIsFree(square) {
    let busy = document.getElementById(square).hasChildNodes()
    return !busy
}

// Makes sure cross is drawn first, then circle, then cross ...
function changeTurns(square) {
    if (crossMove) {
        crossMove = false
        circleMove = true
        drawCross(square)
        return "cross"
    }
    else {
        circleMove = false
        crossMove = true
        drawCircle(square)
        return "circle"
    }
}

function drawCross(square) {
    var cross = document.createElement('img');
    cross.setAttribute("src", "cross.png");
    cross.setAttribute("height", "100"); 
    cross.setAttribute("width", "100");
    document.getElementById(square).appendChild(cross);
}

function drawCircle(square) {
    var circle = document.createElement('img');
    circle.setAttribute("src", "circle.png");
    circle.setAttribute("height", "100"); 
    circle.setAttribute("width", "100");
    document.getElementById(square).appendChild(circle);
}

function drawLine(start, fin) {

    const canvas = document.querySelector('#canvas');

    if (!canvas.getContext) {
        return;
    }
    const ctx = canvas.getContext('2d');

    // set line stroke and line width
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;

    // draw a red line
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(fin.x, fin.y);
    ctx.stroke();
}

// Removes crosses, circles and lines. Just like at the very beginning
function restartGame() {
    circleMove = false
    crossMove = true
    CircleCrossPositions = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    let squares = document.getElementsByClassName("square")
    for (let i = 0; i < 9; i++) {
        squares[i].innerHTML = ""
    }
    let canvas = document.querySelector('#canvas');
    let context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height)
}

// Update score of cross/circle
function updateScore(winner) {
    if (winner == "cross") {
        crossScore ++
    }
    else if (winner == "circle") {
        circleScore ++
    }
    let crossScoreTag = document.getElementById("crossScore")
    let circleScoreTag = document.getElementById("circleScore")
    circleScoreTag.innerText = `Circle: ${circleScore}`
    crossScoreTag.innerText = `Cross: ${crossScore}`
}