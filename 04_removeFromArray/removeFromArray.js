const removeFromArray = function (array) {
    for (let i = 1; i < arguments.length; i++) {
        const indexOfElementToDelete = array.indexOf(arguments[i]);

        if (indexOfElementToDelete === -1) continue;

        const leftHalf = array.slice(0, indexOfElementToDelete);
        const rightHalf = array.slice(indexOfElementToDelete + 1);
        array = leftHalf.concat(rightHalf);
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
