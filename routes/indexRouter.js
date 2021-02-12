const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/', moviesController.movies);
router.get('/series', moviesController.series);
router.get('/episodios', moviesController.episodes);

module.exports = router;