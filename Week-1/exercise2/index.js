const http = require("http");
const url = require('url');
const ptb2 = require("./excercise2_modult");

var app = http.createServer((req, res) => {
    var q = url.parse(req.url, true).query;
    var a = q.a;
    var b = q.b;
    var c = q.c;
    var result = ptb2.ptb2(a,b,c);
    res.write(`
    a = ${a}
    b = ${b}
    c = ${c}
    ${result}
    `);
    res.end(); 
});

app.listen(3000, () => {
    console.log(`Server is listening at port 3000`);
});