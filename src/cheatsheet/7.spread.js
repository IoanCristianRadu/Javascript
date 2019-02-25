const first = [1, 2, 3];
const second = [4, 5, 6];

console.log(first.concat(second));
console.log([...first, ...second]);

console.log([...first, 'a', ...second]);

const objectOne = { name: 'Cristian' };
const objectTwo = { job: 'Programmer' };
console.log({ ...objectOne, ...objectTwo, location: 'Sweden' })

// Clone an object
const clone = { ...objectOne }