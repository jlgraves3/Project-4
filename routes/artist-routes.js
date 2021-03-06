const express = require('express');
const artistRoutes = express.Router();

const apiHelper = require('../services/artsy-helpers/artsy_api_helper');

artistRoutes.get('/', apiHelper.getArtists, (req,res) => {
	res.json({
		message: 'ok',
		data: res.locals.data
	});
});

artistRoutes.get('/:artist', apiHelper.getArtist, (req,res) => {
	res.json({
		message: 'ok',
		data: res.locals.data
	});
});

artistRoutes.get('/:artist/works', apiHelper.getArtworks, (req,res) => {
	res.json({
		message: 'ok',
		data: res.locals.data
	});
});

module.exports = artistRoutes;