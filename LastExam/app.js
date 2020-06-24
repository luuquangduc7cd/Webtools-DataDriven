const http = require('http')
const express = require('express')
const config = require('./config.json')
const expressLayouts = require('express-ejs-layouts')


const app = express()

app.set('view engine', 'ejs')
app.set("views", "views")
app.use('/static', express.static('public'))
app.use(expressLayouts)
app.set('layout', 'layout')

let home = require('./routers/index')
let admin = require('./routers/admin')

app.use('/', home)
app.use('/admin', admin)

let host = config.server.host
let port = config.server.port

const server = http.createServer(app)

server.listen(port, host, () => {
    console.log(`Server is running at ${host}:${port}`)
})