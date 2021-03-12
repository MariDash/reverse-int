module.exports = function reverse(n) {
    let str = '' + n;
    return (str.split("").reverse().join(""));
}
