const express = require('express')
const router = express.Router()
const url = require('url')
let db = require('../models/books.json')

router.get('/', (req, res) => {
    let data = db.books
    let localData = {
        title: "Trang chủ",
        content: "Chương trình quản lý sách"
    }
    return res.render('index', { localData, data })
})

// Add new book with POST method
router.post('/add', (req, res) => {
    let bid = parseInt(req.body.bid)
    let bname = req.body.bname
    let aid = parseInt(req.body.aid)
    let aname = req.body.aname
    let bprice = req.body.bprice
    let obj = {
        id: bid,
        name: bname,
        author: {
            id: aid,
            name: aname
        },
        price: bprice
    }
    db.books.push(obj)
    console.log(db)
    return res.redirect('/')
})
// Remove an exist book
router.get('/remove/:id', (req, res) => {
    db.books = db.books.filter(book => book.id != req.params.id)
    return res.redirect('/')
})
// Update an exist book with PUT method
router.post('/modify', (req, res) => {
    let bid = parseInt(req.body.bid)
    let bname = req.body.bname
    let aid = parseInt(req.body.aid)
    let aname = req.body.aname
    let bprice = req.body.bprice
    let obj = {
        id: bid,
        name: bname,
        author: {
            id: aid,
            name: aname
        },
        price: bprice
    }
    for(let i = 0; i < db.books.length; i++)
        if(db.books[i].id == obj.id) {
            db.books[i].name = obj.name
            db.books[i].author.id = obj.author.id
            db.books[i].author.name = obj.author.name
            db.books[i].price = obj.price
        }
    return res.redirect('/')
})
// Search book with GET method
router.get('/search', (req, res) => {
    let q = url.parse(req.url, true).query
    let strSearch = q.search
    let data = db.books.filter(book => book.name.includes(q.search))
    let localData = {
        title: "Tìm kiếm",
        content: "Kết quả tìm kiếm"
    }
    res.render('index', { localData, data })
})


module.exports = router