const repeatString = function (string, numRepeats) {
    if (numRepeats < 0) {
        return "ERROR";
    } else if (numRepeats === 0) {
        return "";
    }

    let repeatString = string;

    for (let i = 1; i < numRepeats; i++) {
        repeatString += string;
    }

    return repeatString;
};

// Do not edit below this line
module.exports = repeatString;
