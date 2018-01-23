const numbers = process.argv.splice(2);
const sum = numbers.reduce((a,b) => +a + +b);

console.log(sum)
