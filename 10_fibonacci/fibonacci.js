const fibonacci = function(num) {
    let tran = Number(num);
    let fib = 2;
    let total = 0;
    let arr = [];
    if(tran > 0) {
        for(let i = 0; num > i; i++) {
            fib = (fib - 1) + (fib-2);
            arr.push(fib);
        }
        return arr;
    }
};

// Do not edit below this line
module.exports = fibonacci;
