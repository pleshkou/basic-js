module.exports = function transform(arr) {
    if (!(arr instanceof Array)) throw new Error;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '--discard-next') {
            i++;
            continue;
        }
        if (arr[i] == '--discard-prev') {
            result.pop();
            continue;
        }
        if (arr[i] =='--double-next') {
            if ((i+1) < arr.length) {
                result.push(arr[i+1]);
                }
                continue;
        }
        if (arr[i] == '--double-prev') {
            let p = arr[i-1];
            if (p != undefined) result.push(arr[i-1]);
            continue;
        }
        result.push(arr[i]);
    }
    return result;
};

