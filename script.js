
$(function () {
    $('.sudoku').hide()

    $('.btn-start').click(function () {
        $('.sudoku').fadeIn(1500);

    });
});
const CANVAS = document.getElementById("canvas");
const Context = CANVAS.getContext("2d");
let x = 0;
let y = 0;

let number2 = [
    [6, 0, 5, 0, 0, 3, 4, 0, 0],
    [7, 0, 3, 0, 0, 5, 0, 8, 2],
    [4, 8, 0, 1, 0, 0, 6, 0, 5],
    [9, 2, 4, 0, 3, 1, 7, 5, 8],
    [0, 0, 0, 9, 0, 8, 2, 0, 3],
    [0, 3, 7, 0, 4, 0, 0, 9, 6],
    [5, 6, 9, 0, 8, 4, 3, 7, 0],
    [2, 7, 1, 3, 0, 0, 8, 6, 4],
    [0, 4, 8, 7, 1, 6, 0, 2, 0]
];
let number = [
    [0, 9, 5, 8, 2, 3, 4, 1, 7],
    [7, 1, 3, 4, 6, 5, 9, 8, 2],
    [4, 8, 2, 1, 9, 7, 6, 3, 5],
    [9, 2, 4, 6, 3, 1, 7, 5, 8],
    [1, 5, 6, 9, 7, 8, 2, 4, 3],
    [8, 3, 7, 5, 4, 2, 1, 9, 6],
    [5, 6, 9, 2, 8, 4, 3, 7, 1],
    [2, 7, 1, 3, 5, 9, 8, 6, 4],
    [3, 4, 8, 7, 1, 6, 5, 2, 9]
];
let field = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let answer = [
    [6, 9, 5, 8, 2, 3, 4, 1, 7],
    [7, 1, 3, 4, 6, 5, 9, 8, 2],
    [4, 8, 2, 1, 9, 7, 6, 3, 5],
    [9, 2, 4, 6, 3, 1, 7, 5, 8],
    [1, 5, 6, 9, 7, 8, 2, 4, 3],
    [8, 3, 7, 5, 4, 2, 1, 9, 6],
    [5, 6, 9, 2, 8, 4, 3, 7, 1],
    [2, 7, 1, 3, 5, 9, 8, 6, 4],
    [3, 4, 8, 7, 1, 6, 5, 2, 9]
];
document.addEventListener('keydown', movePointer)

function drawField() {
    Context.strokeStyle = "black";
    Context.lineWidth = 5;
    Context.beginPath();

    for (let i = 150; i <= 300; i = i + 150) {
        Context.moveTo(i, 0);
        Context.lineTo(i, 450);
        Context.stroke();

        Context.moveTo(0, i);
        Context.lineTo(450, i);
        Context.stroke();
    }
    Context.lineWidth = 1;


    for (let i = 50; i < 450; i = i + 50) {
        Context.moveTo(i, 0);
        Context.lineTo(i, 450);
        Context.stroke();

        Context.moveTo(0, i);
        Context.lineTo(450, i);
        Context.stroke();
    }
    Context.font = "30px serif";
    Context.textAlign = "center";
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (number[i][j] == 0) {
                Context.fillStyle = "red";
            } else {
                Context.fillStyle = "black";
            }
            if (number[i][j] + field[i][j] != 0) {
                Context.fillText(number[i][j] + field[i][j], 25 + 50 * j, 35 + 50 * i);
            }
        }
    }
    Context.lineWidth = 4;
    Context.strokeStyle = "orange";
    Context.beginPath();
    Context.rect(x * 50, y * 50, 50, 50);
    Context.stroke();
}
drawField();
function movePointer(e) {
    if (e.key == "ArrowRight") {
        if (x < 8) {
            x = x + 1;
        }
    } else if (e.key == "ArrowLeft") {
        if (x > 0) {
            x = x - 1;
        }
    } else if (e.key == "ArrowDown") {
        if (y < 8) {
            y = y + 1;
        }
    } else if (e.key == "ArrowUp") {
        if (y > 0) {
            y = y - 1;
        }
    } else if (e.keyCode >= 48 && e.keyCode <= 57) {
        putNumber(e.keyCode - 48);
    }



    Context.clearRect(0, 0, 450, 450);
    drawField();
}
function putNumber(n) {
    if (number[y][x] == 0) {
        field[y][x] = n;
    }
}
let btn = document.getElementById('btn')
btn.addEventListener("click", Answer)
let resultA = document.getElementById('result-1');
let resultB = document.getElementById('result-2');
function Answer(){
    let checker = true;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (number[i][j] + field[i][j] != answer[i][j]) {
                checker = false;
            }
        }
    }
    if (checker == true){
        resultA.classList.add("show")
    }else if(checker == false){
        resultB.classList.add("show")
    }
    
}

function gohome(){
    resultA.classList.remove("show")
    resultB.classList.remove("show")
}


