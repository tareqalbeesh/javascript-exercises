const leapYears = function (year) {
    return year % 4 == 0 || (year % 100 == 0 && year % 400 == 0) || !year % 100
};
// divisible by 4 
// divisible by 100 if and only if they're divisible by 400 => divisible by 400 ?
// Do not edit below this line
module.exports = leapYears;
