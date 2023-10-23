const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log('index')
  res.render('index', { title: 'Express' });
});
router.get('/works', (req, res, next) => {
  console.log('works')
  res.render('works', { title: 'Express' });
});

module.exports = router;
