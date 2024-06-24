const fibonacci = function(num) {
    let tran = Number(num);
    let fib = 1;
    let total = 0;
    let arr = [];
    if(tran > 0) {
        for(let i = 0; 2 > i; i++) {
            total = tran -1 ;
            arr.push(total);
            tran--
        }
        return arr;
    }
};

// Do not edit below this line
module.exports = fibonacci;
