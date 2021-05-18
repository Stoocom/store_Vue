const express = require('express');
const fs = require('fs');
const cartRouter = require('./cartRouter');
const app = express();

app.use(express.json());
app.use('/', express.static('./public'));
//app.use('/products', express.static('./public'));

app.use('/api/cart', cartRouter);

// app.get('/product/:id', (req, res) => {
//   res.send(req.params.id);
// });

app.get('/api/products', (req, res) => {
  fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({result: 0, text: err}));
      // res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      res.send(data);
    }
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening ${port} port`);
});

// CRUD
// app.post(); // CREATE
// app.get(); // READ
// app.put(); // UPDATE
// app.delete(); // DELETE
