module.exports = function reverse(n) {
    let array = n.toString().split('');
    if (array[0] === '-') { array.shift(); }
    return Number(array.reverse().join(''));
}