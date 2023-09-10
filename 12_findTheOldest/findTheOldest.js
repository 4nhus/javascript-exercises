const findTheOldest = function(array) {
    for (let person of array) {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = new Date().getFullYear();
        }

        person.age = person.yearOfDeath - person.yearOfBirth;
    }

    return array.sort((personLeft, personRight) => personRight.age - personLeft.age)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
