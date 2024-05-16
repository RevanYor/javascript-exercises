const sumAll = function(a,b) {
    if(typeof a == "number" && typeof b == "number" && a > 0 && b > 0) {
        if(a < b) {
            let sum = 1;
            let suma = 0;
            let sumed = a;
            for(let i = a; i <b; i++) {
                suma = sum + 1;
                sum = suma + sumed++;
            }
            return sum;

        } else if(a > b) {
            let sum = 1;
            let suma = 0;
            let sumed = b;
            for(let i = b; i < a; i++) {
                suma = sum + 1;
                sum = suma + sumed++
            }
            return sum;
        }
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
