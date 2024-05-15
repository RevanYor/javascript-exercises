const removeFromArray = function(array,...elem) {

    let arr = [...elem];
    for (let i = arr.length; i < arr.length; i++) {
        const index = array.indexOf(elem);
        if (index !== -1) {
            array.splice(index, 1);
        }
            return array;
    }
};
// Do not edit below this line
module.exports = removeFromArray;