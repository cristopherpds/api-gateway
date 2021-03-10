const express = require('express');

app = express();

app.get('/', (req, res) => res.send('Products API'));


app.listen(3002, () => console.log('Products API listening on port 3002'));