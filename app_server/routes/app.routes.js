var express = require('express');
var router = express.Router();

var articlesController = require('../controllers/articles')
var aboutController = require('../controllers/about')

router.get('/articles', articlesController.article_list);

router.get('/articles/:articleid', articlesController.article_read);

router.post('/articles/add', articlesController.article_write);

router.get('/about', aboutController.about);

module.exports = router;
