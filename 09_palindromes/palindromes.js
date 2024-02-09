// const palindromes = function (str) {
//     arr = str.split("")
//     let mid = Math.floor(arr.length / 2)
//     for (let i = 0; i < mid; i++) {
//         if (arr[i] != arr[arr.length - 1 - i])
//             return false
//     }
//     return true

// };
const palindromes = function (str) {
    return str.split("").reverse().join("") == str

};


// Do not edit below this line
module.exports = palindromes;
