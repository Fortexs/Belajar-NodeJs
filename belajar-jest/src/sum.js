export const sum = (first, second) => {
    return first + second;
}

export const sumAll = (numbers) => {
    let i = 0;

    for (let number of numbers) {
        i += number;

    }

    return i;
}

export const calculate = (numbers, callback) => {
    let i = 0;

    for (let number of numbers) {
        i += number;

    }

    callback(i);
}

export const calculateReturn = (numbers, callback) => {
    let i = 0;

    for (let number of numbers) {
        i += number;

    }

    return callback(i);
}