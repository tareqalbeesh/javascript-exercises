const findTheOldest = function (arr) {
    return arr.reduce((oldest, curr) => {
        let oldestAge = calculateAge(oldest.yearOfBirth, oldest.yearOfDeath)
        let currAge = calculateAge(curr.yearOfBirth, curr.yearOfDeath)
        if (currAge > oldestAge)
            return curr
        else
            return oldest
    })

};
function calculateAge(born, died) {
    return died - born;
}

// Do not edit below this line
module.exports = findTheOldest;
