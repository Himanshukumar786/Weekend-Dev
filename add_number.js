// added any number of arguments code 
// 1. add(1, 2, 3, 4, 5) should return 15
// 2. add(1, 2, 3, 4, 5, 6) should return 21
// 3. add(1, 2, 3, 4, 5, 6, 7) should return 28

function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(add(1, 2, 3, 4, 5)); // 15