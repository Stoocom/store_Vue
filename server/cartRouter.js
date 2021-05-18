const express = require('express');
const fs = require('fs');
const handler = require('./handler');
const router = express.Router();

router.get('/', (req, res) => {
  fs.readFile('./server/db/userCart.json', 'utf-8', (err, data) => {
    if (err) {
      console.log('Ошибка');
      res.sendStatus(404, JSON.stringify({result: 0, text: "Ошибка"}));
    } else {
      console.log('Получен перечень корзины');
      res.send(data);
    }
  });
});

router.post('/', (req, res) => {
  console.log('Сработал метод добавления');
  handler(req, res, 'add', './server/db/userCart.json');
});
// localhost:3000/api/cart/123 // req.params.id
// localhost:3000/api/cart/?var1='sfsf'&var2='ada' // req.query
router.put('/:id', (req, res) => {
  console.log('Сработал метод изменения');
  handler(req, res, 'change', './server/db/userCart.json');
});

router.delete('/', (req, res) => {
  console.log('Сработал метод удаления');
  handler(req, res, 'delete', './server/db/userCart.json');
});

module.exports = router;
