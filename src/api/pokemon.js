const express = require('express');
const controller_director = require('../controllers/controller');

const router = express.Router();

router.get('/:table', function(req, res) {
  var table = req.params.table;
  var controller = controller_director[String(table)];

  controller.readAll(table).then(table_data => {
    table_data ? res.send(table_data) : res.json("Error");
  });
});

router.get('/:table/:attr', function(req, res) {
  var table = req.params.table;
  var attr = req.params.attr;
  var controller = controller_director[table];

  res.json('attr');
});

router.get('/:table/:attr/:val', function(req, res) {
  var table = req.params.table;
  var attr = req.params.attr;
  var val = req.params.val;
  var controller = controller_director[table];

  controller.readSpecific({table, attr, val}).then(table_data => {
    table_data ? res.send(table_data) : res.json("Error");
  });
});

module.exports = router;