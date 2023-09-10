const findTheOldest = function(array) {
    for (let person of array) {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = new Date().getFullYear();
        }
    }

    array.sort((personLeft, personRight) => (personLeft.yearOfDeath - personLeft.yearOfBirth) - (personRight.yearOfDeath - personRight.yearOfBirth));

    return array[array.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
