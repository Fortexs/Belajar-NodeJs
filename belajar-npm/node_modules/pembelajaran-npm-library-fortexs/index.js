export const hayKamu = (nama) => {
    return `Selamat Siang ${nama}`;

}

export const sum = (numbers) => {
    let total = 0
    for (const number of numbers) {
        total += number;
    }
    return total;
}