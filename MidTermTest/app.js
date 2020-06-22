const http = require('http')
const express = require('express')
const path = require('path')
const config = require('config')
const bodyParser = require('body-parser')

let app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', require(path.join(__dirname, 'routers', 'index')))

let server = http.createServer(app);

const host = config.get('server.host')
const port = config.get('server.port')
server.listen(port, host, () => {
    console.log(`Server is running at ${host}:${port}`)
})