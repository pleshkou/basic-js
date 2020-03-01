module.exports = function repeater(str, options) {
    let result = [];
    let addition_result = [];
    options.addition = (options.addition === undefined) ? '' : String(options.addition);
    options.repeatTimes = options.repeatTimes || 1;
    options.separator = options.separator || '+';
    options.addition = options.addition || '';
    options.additionRepeatTimes = options.additionRepeatTimes || 1;
    options.additionSeparator = options.additionSeparator || '|';

    for (let i = 0; i < options.additionRepeatTimes; i++) {
        addition_result.push(options.addition);
    }
    let new_str = `${str}${addition_result.join(options.additionSeparator)}`;
    for (let k = 0; k < options.repeatTimes; k++) {
        result.push(new_str);
    }
    return result.join(options.separator);
};


