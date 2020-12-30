const express = require('express');
const getProduct = require('./getProduct');
const getProducts = require('./getProducts');

const app = express();
const port = 3000;

app.listen(port, () => console.log(`test at ${port}`));

/*
https://expressjs.com/en/starter/basic-routing.html
app.METHOD(PATH, HANDLER)
    app is an instance of express.
    METHOD is an HTTP request method, in lowercase.
    PATH is a path on the server.
    HANDLER is the function executed when the route is matched.
https://expressjs.com/en/guide/routing.html
    req = info about request
    res = info about your response that you send back
*/

app.get('/api/products', getProducts);
app.get('/api/products/:id', getProduct);