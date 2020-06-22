const http = require("http");
const calc = require("./calc-module");

const a = 10, b = 5;

let app = http.createServer((req, res) => {
    res.write(`
    a = ${a}
    b = ${b}
    a + b = ${calc.add(a, b)}
    a - b = ${calc.subtract(a, b)}
    a * b = ${calc.multiply(a, b)}
    a / b = ${calc.devide(a, b)}
    `);
    res.end();
});

app.listen(3000, () => {
    console.log(`a + b = ${calc.add(a, b)}\na - b = ${calc.subtract(a, b)}\na * b = ${calc.multiply(a, b)}\na / b = ${calc.devide(a, b)}`);
});