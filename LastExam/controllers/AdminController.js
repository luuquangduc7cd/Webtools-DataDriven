let index = (req, res) => {
    return res.render('pages/admin',{layout: 'layout'})
}

module.exports = {
    index: index
}