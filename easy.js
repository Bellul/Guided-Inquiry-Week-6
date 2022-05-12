/* EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers. */

let numbs = [1, 8, 25]
let fewNumb = [7, 30, 18, 22, 44]
let manyNumb = [5, 94, 76, 39, 28, 11, 50, 66]

function average(array){
    let total = array.reduce((a, b) => a + b, 0);
    return total / array.length;
}

console.log(average(numbs))
console.log(average(fewNumb))
console.log(average(manyNumb))