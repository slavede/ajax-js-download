const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/api/file', (req, res) => {
  res.json({
    csv: 'TW9qIGZhamwh'
  });
});

router.post('/api/file', (req, res) => {
  res.json({
    body: req.body
  })
})

module.exports = router;
