const fibonacci = function (n) {
    let prev = 1, curr = 1
    if (n <= 2)
        return 1
    for (let i = 2; i < n; i++) {
        temp = curr
        curr = curr + prev
        prev = temp
    }
    return curr
};

// Do not edit below this line
module.exports = fibonacci;
