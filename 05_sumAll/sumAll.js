const sumAll = function(a,b) {
    if(typeof a == "number" && typeof b == "number" && a > 0 && b > 0) {
        if(a < b) {
            let sum = a;
            let total = 0;
            let sumed = 0;
            for(let i = a; i <= b; i++) {
                sum++;
                sumed = a + sum;
                total = sumed + sumed;
                final = total + ;
            }
            return total;

        } else if(b < a) {
            let sum = b;
            let total = 0;
            for(let i = b; i <= a; i++) {
                sum++;
                total = sum + sum;
            }
            return total;
        }
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
