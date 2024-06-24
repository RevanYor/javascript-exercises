const palindromes = function (word) {
    let arr = word.toLowerCase();
    let array = arr.split(',');
    let arr2 = array.slice();
    let array2 = arr2.reverse();
    let jon = array.join(',');
    let jon2 = array2.join(',');
    /* if (array.length !== array2.length) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] == array2[i]) {
                return true;
            }
        }
    } 
    return array2; */
    if(jon == jon2) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
