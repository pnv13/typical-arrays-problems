exports.min = function min(array) {
    if (!Array.isArray(array) || array.length === 0) return 0;
    let min = array.reduce((a, b) => Math.min(a, b));
    return min;
};

exports.max = function max(array) {
    if (!Array.isArray(array) || array.length === 0) return 0;
    let max = array.reduce((a, b) => Math.max(a, b));
    return max;
};

exports.avg = function avg(array) {
    if (!Array.isArray(array) || array.length === 0) return 0;
    let avg = array.reduce((a, b) => a + b) / array.length;
    return avg;
};
