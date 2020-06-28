var express = require('express');
var router = express.Router();
var IndexController = require('../controllers/index');

/* GET home page. */
router.get('/', IndexController.Index);

module.exports = router;
