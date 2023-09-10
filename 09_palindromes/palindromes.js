const palindromes = function(string) {
    string = string.toLowerCase().replaceAll(/[^a-z0-9]/g, "");

    for (let i = 0, j = string.length - 1; i < j; i++, j--) {
        if (string[i] != string[j]) return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
