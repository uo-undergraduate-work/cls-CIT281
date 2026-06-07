function validDenomination(coin) {
    return [1, 5, 10, 25, 50, 100].indexOf(coin) !== -1;
}

function valueFromCoinObject(obj) {
    const { denom = 0, count = 0 } = obj;
    return denom * count;
}

const valueFromArray = (arr) => {
    arr = arr.flat();
    return arr.reduce((accum, obj) => accum + valueFromCoinObject(obj), 0);
}
function coinCount(...coinage) {
    return valueFromArray(coinage);
}

module.exports = { coinCount };

console.log("{}", coinCount({denom: 5, count: 3})); 
console.log("{}s", coinCount({denom: 5, count: 3},{denom: 10, count: 2})); 

const coins = [{denom: 25, count: 2},{denom: 1, count: 7}]; 

console.log("...[{}]", coinCount(...coins)); 
console.log("[{}]", coinCount(coins));  // Extra credit 