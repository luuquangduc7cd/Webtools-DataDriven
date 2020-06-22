const http = require("http");

let port = 3000;


const app = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(`<h1>Hello world!</h1>`);
    res.end();
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});