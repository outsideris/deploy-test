const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.end("it's works");
});

router.get('/ok', (req, res, next) => {
  res.json({ ok: 'true' });
});

router.get('/fail', (req, res, next) => {
  throw new Error('fail');
});

module.exports = router;
