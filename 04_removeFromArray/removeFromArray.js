const removeFromArray = function(array,...elem) {

    let arr = [...elem];
    arr.forEach((elem)=> {
        for(let i = 0; i < array.length; i++) {
        const index = array.indexOf(elem);
        if (index !== -1) {
            array.splice(index,1);
        }
    }
    })
    return array;
};
// Do not edit below this line
module.exports = removeFromArray;