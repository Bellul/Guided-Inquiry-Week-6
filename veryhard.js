/* VERY HARD: You are given coins of different denominations and a total amount of money amount. 
Write a function to compute the fewest number of coins that you need to make up that amount. If that 
amount of money cannot be made up by any combination of the coins, return -1. */

let coins1 = [1, 2, 5]
let amm1 = 11

let coins2 = [2]
let amm2 = 3

let coins3 = [1, 86, 43, 100, 370, 65, 37, 9, 942]
let amm3 = 50000

let coins4 = [500, 99]
let amm4 = 45


let minCoins = function (array, ammount) {
    
    let total = null;
    var highestVal;

    rmHighValue = array => {

        var highestVal = Math.max(...array);
        highestVal = array.filter(array => array !== highestVal);
        return highestVal;
    };

    while (ammount > 0) {

        highestVal = Math.max(...array);
        if (highestVal > ammount) {
            array = rmHighValue(array);
            if (!array.length) {
                return -1;
            };

        } else {
            ammount -= highestVal;
            total++;
        };
    };

    return total;
    
};


console.log(minCoins(coins1, amm1))
console.log(minCoins(coins2, amm2))
console.log(minCoins(coins3, amm3))
console.log(minCoins(coins4, amm4))