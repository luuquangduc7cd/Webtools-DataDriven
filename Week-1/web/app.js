const express = require("express");
const ejs = require("ejs");

let app = express();
let host = "0.0.0.0";
let port = 3000;

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
    let local = {
        pageTitle: "Home page",
        author: "Luu Quang Duc"
    }
    res.render("index", {local});
});



app.listen(port, host, ()=>{
    console.log(`Server is listening at ${host}:${port} `);
})
