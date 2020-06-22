const http = require("http")
const url = require("url")
const fs = require("fs")


/* express is not recommended */

let server = http.createServer((req, res) => {
    let path = url.parse(req.url, true).pathname;
    if(path == "/search") {
        let q = url.parse(req.url, true).query;
        let strSearch = q.search;
        let rawdata = fs.readFileSync("database.json");
        let books = JSON.parse(rawdata)['books'];

        books.forEach((element) => {
            var result = books.filter((book) => {
                return book.name.toLowerCase().indexOf(strSearch.toLowerCase()) !== -1
            })
            console.log(`${result.name}-${result.author}-${result.price}`)
        });
        /*res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Kết quả tìm kiếm</title>
        </head>
        <body>
            <div>
                <h1>Kết quả tìm kiếm</h1>
                <ul>
                    <li>Tên sách: ${result.name}</li>
                    <li>Tác giả: ${result.author.name}</li>
                    <li>Giá: ${result.price}</li>
                </ul>
            </div>
        </body>
        </html>
        `)*/
        res.end()
    } else {
        res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Search</title>
        </head>
        <body>
            <form action="/search">
                <div>
                    <input type="search" name="search" placeholder="Book's name">
                </div>
                <div>
                    <button type="submit">Search</button>
                </div>
            </form>
        </body>
        </html>
        `)
        res.end()
    }
})


server.listen(3000, () => {
    console.log("Server is running at port 3000")
})