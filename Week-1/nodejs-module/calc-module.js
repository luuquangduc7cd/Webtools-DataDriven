let add = (a, b) => {
    return a + b;
}

let subtract = (a, b) => a - b;

function multiply(a, b){
    return a*b;
}

let devide = function(a, b){
    return a/b;
}

module.exports = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    devide: devide
}