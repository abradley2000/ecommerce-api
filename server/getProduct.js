const products = require('../products.json');

/*
app.get('/api/products/:id', getProducts); <- index.js
Because I used ":id" in the path, the params object will store a value to the "id" key.

The function below uses .find(), which goes through each index of an array (products.json)
until the callback function returns a truthy value.
*/

//.find(element, index, array, callbackFn)

/*
The function below assigns 'item' to the first true value that .find() receives when going through 'products',
if the value of item is false, it returns a status of 500 and sends 'Item is not in list'
*/

const getProduct = (req, res) => {
    const item = products.find(el => el.id === +req.params.id)
    if (!item) return res.status(500).send('Item is not in list')
    res.status(200).send(item)
}

module.exports = getProduct;