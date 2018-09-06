var express = require('express');
var router = express.Router();
var db = require('../heroes');

/* GET home page. */
router.get('/', db.getHeroes);
router.get('/:id', db.getHero);
router.post('/', db.addHero);
router.put('/', db.updateHero);
router.delete('/:id', db.deleteHero);

module.exports = router;
