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
let number2 = []
let Input = document.querySelectorAll("td input")
function picUp() {
    for (let i = 0; i < 9; i++) {
        for(let k = 0; k < Input.length; k++){
            Input[k].value = atsu
            for (let j = 0; j < 9; j++) {
                Input[0].value = number[i][j]
        }
    }   
}

    // for (let i = 0; i < 9; i++) {
    //     for (let j = 0; j < 9; j++) {
    //     for(let k = 0; k < Input.length; k++){
    //             Input[k].value = number[i][j]
    //     }
    //     }
    // }



    // for(let k = 0; k < Input.length; k++){
    //     return picUp2(k)
    // }
    // number.forEach(function (item) {
    //     console.log(item);
    //     for (let i = 0; i < 9; i++) {
    //         for(let k = 0; k < Input.length; k++){
    //             Input[k].value = item[i]
    //         }
    //     }
    // });

}

// function picUp2(i,j){
//     for(let k = 0; k < Input.length; k++){
//             Input[k].value = number[i][j]
//             console.log(i)
//             console.log(j)
//             picUp()
//     }
// }
picUp()
