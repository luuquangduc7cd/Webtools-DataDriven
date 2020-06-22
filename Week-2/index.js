const http = require("http")
const express = require("express")
const ejs = require("ejs")
const url = require("url")
const path = require("path")

const calc = require("./modules/calc")

const host = "localhost"
const port = 3000

let app = express()
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
let server = http.createServer(app)



app.get("/", (req, res) => {
    return res.render("index", {message: "", result: -1})
})
app.get("/calc", (req, res) => {
    let q = url.parse(req.url, true).query;
    let a = parseFloat(q.a);
    let b = parseFloat(q.b);
    let type = q.calc;
    if(type == 1){
        let c = calc.perimeter(a, b);
        return res.render("index", {message: "Chu vi hinh chu nhat", result: c})
    }
    if(type == 2){
        let c = calc.area(a, b);
        return res.render("index", {message: "Dien tich hinh chu nhat", result: c})
    }
    return res.render("index", {message: "", result: -1})
})

app.get("/ex1", (req, res) => {
    return res.render("exercise1", {data: false});
})
app.get("/ex2", (req, res) => {
    return res.render("exercise2", {data: false})
})

app.get("/exercise1", (req, res) => {
    let q = url.parse(req.url, true).query
    let a = parseFloat(q.a)
    let b = parseFloat(q.b)
    let c = parseFloat(q.c)
    let result = calc.equation(a,b,c)
    return res.render("exercise1", {data: result})
})
app.get("/exercise2", (req, res) => {
    let q = url.parse(req.url, true).query
    let result = calc.convert(q.usd)
    return res.render("exercise2", {data: result});
})
server.listen(port, host, () => {
    console.log(`Server is running on ${host}:${port}`)
})