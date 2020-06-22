const http = require("http");
const url = require('url');


let app = http.createServer((req, res) => {
    let q = url.parse(req.url, true).query;
    let usd = q.usd;
    let vnd = usd * 23500;
    res.write(`${usd}USD = ${vnd}VND`);
    res.end();
});

app.listen(3000, () => {
    console.log(`Server is listening at port 3000`);
});