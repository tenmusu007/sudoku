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
let number1 = [6, 0, 5, 0, 0, 3, 4, 0, 0]
let number2 = [6, 0, 5, 0, 0, 3, 4, 0, 0]
let number3 = [6, 0, 5, 0, 0, 3, 4, 0, 0]
let number4 = [6, 0, 5, 0, 0, 3, 4, 0, 0]
let number5 = [6, 0, 5, 0, 0, 3, 4, 0, 0]
let number6 = [6, 0, 5, 0, 0, 3, 4, 0, 0]
let number7 = [6, 0, 5, 0, 0, 3, 4, 0, 0]
let number8 = [6, 0, 5, 0, 0, 3, 4, 0, 0]
let number9 = [6, 0, 5, 0, 0, 3, 4, 0, 0]

// let result = number.map(function( value ) {
//     return value > 0
// });

let cont = document.querySelector(".container")
let table = document.createElement('table')
cont.appendChild(table)
function createMatrix(){
    for(let i = 0; i < 81; i++){
        let input = document.createElement('input')
            input.type = "text"
            input.maxLength = 1
            input.value = number1
            table.appendChild(input)
    }
}
createMatrix()