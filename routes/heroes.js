var express = require('express');
var router = express.Router();
var db = require('../heroes');

/* GET home page. */
router.get('/', db.getHeroes);

module.exports = router;
