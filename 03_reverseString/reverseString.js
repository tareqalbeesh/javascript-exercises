const reverseString = function (str) {
    strArray = Array.from(str);
    return String.from(reverseArray(strArray))

}
function reverseArray(arr) {

    resultArray = []
    for (let i = arr.length - 1; i--; i >= 0) {
        resultArray.push(arr[i])
    }
    return resultArray
}

// Do not edit below this line
module.exports = reverseString;
