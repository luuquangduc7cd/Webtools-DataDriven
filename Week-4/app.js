let http = require('http')
let express = require('express')
let path = require('path')

let app = express()
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static(path.join(__dirname, 'public')))


let server = http.createServer(app)

app.get('/', (req, res) => {
    res.render('layout')
})

server.listen(3000, ()=> {
    console.log("OK")
})