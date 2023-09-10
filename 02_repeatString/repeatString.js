const repeatString = function (string, numRepeats) {
    if (numRepeats < 0) {
        return "ERROR";
    }

    return String(string).repeat(numRepeats);
};

// Do not edit below this line
module.exports = repeatString;
