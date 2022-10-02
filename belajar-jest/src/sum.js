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