// let table = document.createElement('table')
let x = 0;
let y = 0;
let number = [
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
let cont = document.querySelector(".container")
let table = document.createElement('table')
// let cellMatrix = {}
cont.appendChild(table);
table.classList.add("sudoku-container")
let input = document.createElement('input')
function createTr() {
    for (let i = 0; i < 9; i++) {
        let tr = document.createElement('tr')
        table.appendChild(tr)
        for (let j = 0; j < 9; j++) {
            let td = document.createElement('td')
            tr.appendChild(td)
            td.classList.add("sudoku-section-one")
            let input = document.createElement('input')
            // input.addEventListener("input",InputChange);
            input.type = "text"
            input.maxLength = 1
            if (number[i][j] == 0) {
                input.style.color = "red";
            } else {
                input.style.color = "white";
            }
            if (number[i][j] + field[i][j] != 0) {
                input.value = number[i][j] + field[i][j]
                input.disabled = number[i][j]
                // putNumber(input.value)
                console.log(input.value)
                
            }
            input.addEventListener("change",(e)=>{
                let inputNum = e.target.value
                putNumber(inputNum)
                // console.log(e.target.value)
            });
            // input.addEventListener('keydown', putNumber)
            td.appendChild(input)
        }
    }
}
createTr()
// input.addEventListener('keydown', movePointer)
// function movePointer(e) {
//     if (e.keyCode >= 48 && e.keyCode <= 57) {
//         putNumber(e.keyCode - 48);
//     }
// }
// const Check = document.querySelector(".btn");
//     Check.addEventListener("click", function(e){
//     input.value = e

// });


// function putNumber(n) {
//     console.log(n)
//     for(let y = 0; y < 9; y++){
//         for(let x = 0; x < 9; x++){
//                 if (number[y][x] == 0) {
//                     field[y][x] = n;
//                 }
//         }
//     }
// }
console.log(number[y][x])

let pAnswer = []
// function InputChange(event){
//     pAnswer.push(event)
//     console.log (pAnswer)
// }   
console.log(field)


// function Answer(){
//     let checker = true;
//     for (let i = 0; i < 9; i++) {
//         for (let j = 0; j < 9; j++) {
//             if (number[i][j] + field[i][j] !== answer[i][j]) {
//                 checker = false;
//             }
//         }
//     }
    
//     if (checker == true) {
//         alert("クリア！");
//     }
// }


    // Answer.addEventListener("click", function(){
    //     let checker = true;
    //     for (let i = 0; i < 9; i++) {
    //         for (let j = 0; j < 9; j++) {
    //             if (number[i][j] + field[i][j] !== answer[i][j]) {
    //                 checker = false;
    //             }
    //         }
    //     }
    
    //     if (checker == true) {
    //         alert("クリア！");
    //     }

    // });
// function checkAnswer(){
//     let checker = true;
//     for (let i = 0; i < 9; i++) {
//         for (let j = 0; j < 9; j++) {
//             if (number[i][j] + field[i][j] != answer[i][j]) {
//                 checker = false;
//             }
//         }
//     }

//     if (checker == true) {
//         alert("クリア！");
//     }
// }

            // for (let j = 0; j < 9; j++) {
            //     let input = document.createElement('input')
            //     input.type = "text"
            //     input.maxLength = 1
            //     input.value = number[0][j]
            //     td.appendChild(input)
            // }
// function inputPut(){
//     for (let j = 0; j < 9; j++) {
//         let input = document.createElement('input')
//         input.type = "text"
//         input.maxLength = 1
//         input.value = number[0][j]
//         td.appendChild(input)
//     }
// }

// createTr()
// function picUp() {
//     for (let i = 0; i < 9; i++) {
//         for (let j = 0; j < 9; j++) {
//             console.log(number[i][j])
//         }
//     }
// }

            // let input = document.createElement('input')
            // input.maxLength = 1;
            // td.appendChild(input)
            // for (let i = 0; i < 1; i++) {
            //     for (let j = 0; j < 9; j++) {
            //         let input = document.createElement('input')
            //         input.maxLength = 1
            //         input.textContent = number[i][j]
            //         td.appendChild(input)
            //     }
            // }