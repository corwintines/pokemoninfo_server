const express = require('express');
const router = express.Router();

const queries = require('../db/queries');

router.get('/:table', function(req, res) {
  res.json('table');
});

router.get('/:table/:attr', function(req, res) {
  res.json('attr');
});

router.get('/:table/:attr/:val', function(req, res) {
  res.json('val');
});

module.exports = router;