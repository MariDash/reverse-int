module.exports = function reverse(n) {
    if (n >= 0) {
        let str = '' + n;
        return (str.split("").reverse().join(""));
    } else {
        let str = '' + (n * (-1));
        return (str.split("").reverse().join(""));
    }
}
