const reverseString = function(string) {
    let change = string.replaceAll(',','?');
    let word = change.split('');
    let reversed = word.reverse();
    let final = reversed.toString();
    let con = final.replaceAll(',',"");
    let done = con.replaceAll('?',',');
    return done;
};

// Do not edit below this line
module.exports = reverseString;
