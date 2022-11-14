export const sayHello = (name) => {
    if(name)
    return `Hello ${name}`;
    else
        throw new Error('nama sudah ada');
}