const products = require('../products.json');

/*
Function below checks if there's a query with the key of 'price', and if there is
it sends all elements in 'products.json' with a price value greater than it.
*/

const getProducts = (req, res) => {
    if (req.query.price) {
        const item = products.filter(el => el.price >= +req.query.price)
        return res.status(200).send(item)
    }
    res.status(200).send(products)
}

module.exports = getProducts